#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;


bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= sqrt(n); ++i) {
        if (n % i == 0) return false;
    }
    return true;
}


vector<int> rearrangeArray(vector<int>& arr) {
    vector<int> primes, nonPrimes;

    for (int num : arr) {
        if (isPrime(num)) {
            primes.push_back(num);
        } else {
            nonPrimes.push_back(num);
        }
    }

    if (primes.empty()) {
 
        sort(arr.begin(), arr.end(), greater<int>());
        return arr;
    }


    sort(primes.begin(), primes.end());
    int largestPrime = primes.back(); 
    int smallestPrime = primes.front();

    
    sort(nonPrimes.begin(), nonPrimes.end(), greater<int>());


    vector<int> result;
    result.push_back(largestPrime);
    result.insert(result.end(), nonPrimes.begin(), nonPrimes.end()); 
    result.push_back(smallestPrime); 

    return result;
}

int main() {
    int n;
    cout << "Enter the number of elements in the array: ";
    cin >> n;

    vector<int> arr(n);
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }

    vector<int> result = rearrangeArray(arr);

    cout << "Rearranged array: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}

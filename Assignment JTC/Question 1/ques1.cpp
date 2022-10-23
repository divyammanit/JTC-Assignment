#include <bits/stdc++.h>
using namespace std;


void solve(int arr[], int n){

    // initialize index of first minimum and first maximum element

    int maxi = n - 1, mini = 0;

    // store maximum element of array

    int maxele = arr[n - 1] + 1;


    // traverse all the array elements

    for(int i = 0; i < n; i++) {

        // at even index , we have to put maximum element

        if (i % 2 == 0) {
            arr[i] += (arr[maxi] % maxele) * maxele;
            maxi--;
        }


        // at odd index , we have to put minimum element
        
        else {
            arr[i] += (arr[mini] % maxele) * maxele;
            mini++;
            
        }
    }
    
    // array elements back to it's original form

    for (int i = 0; i < n; i++){

        arr[i] = arr[i] / maxele;
    }
}


// Main function to test test cases

int main(){
    int n;
    cin>>n;
    
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    cout<<"original Array : ";
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }cout<<endl;
    
    solve(arr,n);
    
    cout<<"Modified Array : ";
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    
    return 0;
}
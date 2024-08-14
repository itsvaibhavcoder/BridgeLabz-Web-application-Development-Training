interface user2{
    readonly dbId: number
    email: string,
    userId: number,
    googleId?:string,
    //startTrail(): => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface user2{
    githubToken: string
}

interface Admin extends user2{
    role: "admin" | "ta" | "learner"
}

const vaibhav1: Admin = { dbId: 22, email: "h@h.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "vaibhav10", off: 10) => {
        return 10
    }
}

vaibhav1.email = "vrs@gmail.com"
//vaibhav1.dbId = 345;  --> readonly property

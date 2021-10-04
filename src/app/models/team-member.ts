export class TeamMember {
    teammemberid: number;
    teammembername: String;
    email: String;
    username: String;
    hoursperweek: String;
    role: String;
    status: String;

    constructor(teammemberid: number,
        teammembername: String,
        email: String,
        username: String,
        hoursperweek: String,
        role: String, status: String) {
            this.teammemberid = teammemberid;
            this.teammembername = teammembername;
            this.email=email;
            this.username=username;
            this.hoursperweek=hoursperweek;
            this.role=role;
            this.status=status;

        }

}
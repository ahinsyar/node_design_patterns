const profiles = new Map();
profiles.set('twitter', '@adalovelace')
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada')

profiles.size;
profiles.has('twitter');
profiles.get('twitter');
profiles.has('youtube')
profiles.delete('facebook');
profiles.has('facebook');
profiles.get('facebook');
for(const entry of profiles){
    console.log(entry);
}
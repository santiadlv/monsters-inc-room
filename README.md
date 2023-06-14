# Monster's Inc. Room

A simple computer graphics application to showcase a 3D room from the Disney movie [Monsters, Inc.](https://www.pixar.com/feature-films/monsters-inc)

## Installation

After cloning the repository, `cd` into it and run `npm install` to install the required packages and dependencies.

## Usage

Run `npm run dev` to start a development server locally. It should automatically open the project in your default web browser. If it doesn't, navigate to [localhost at port 5173](http://localhost:5173/index.html) and you should see a colorful spinning cube.

## Scene

The project aims to model one of the rooms from the [Monsters, Inc.](https://www.pixar.com/feature-films/monsters-inc) movie. It features but is not limited to:

- Furniture (bed, nightstand, chair)
- Toys and household items
- Wall decals and room decor
- Flooring, carpet
- Doors and windows

Among other elements. Additionally, it features not only both light and shadow physics, but also animation and interactivity.

## Tech stack

[![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)

We chose to work with the [three.js](https://threejs.org/) JavaScript 3D Library given it has a really simple abstraction layer over the complicated WebGL programming API and its steep learning curve.

It is one of the most popular and stable WebGL libraries out there, with a vast feature set, good documentation, plenty examples to learn from, great performance and ease of learning.

Although [Unity](https://unity.com/) was also available, we wanted to focus on the scene and not on the physics that it could involve. This is why we chose to use a simple render engine rather than a full-fledged, all-in-one game engine like Unity.

## Adversities

Unfortunately, during the development phase, we encountered a challenge. While Three.js is a widely utilized JavaScript library renowned for its capabilities in creating 3D graphics and animations in web browsers, encompassing rendering of 3D objects, lighting management, material handling, and other facets of 3D graphics, there are certain factors to consider when importing objects from specific software, such as Tinkercad, into Three.js, as it can impact the accurate mapping of these objects.

UV mapping is a fundamental technique employed in 3D computer graphics to associate textures with the surfaces of 3D objects. It involves establishing a 2D coordinate system referred to as UV coordinates, which correspond to the vertices of an object's geometry. These UV coordinates are subsequently utilized to map specific points on a 2D texture image to corresponding points on the surface of the object.

When exporting an object from Tinkercad and importing it into Three.js, challenges arise due to Tinkercad's limitation in providing an exported object with a pre-existing UV map.

Tinkercad primarily functions as a browser-based 3D modeling tool with a focus on simplicity, and consequently, it does not offer direct options for exporting UV mapping coordinates. It is tailored more towards beginners and lacks advanced features, such as comprehensive UV mapping capabilities.

However, if precise control over UV mapping is desired, and the export of UV coordinates from Tinkercad is necessary, alternative 3D modeling software with advanced UV mapping capabilities must be considered. Software such as Blender, Maya, 3ds Max, or dedicated UV mapping tools like UVLayout can be utilized for this purpose.

Given that all our models were either downloaded or created within Tinkercad, finding a solution for this predicament proved challenging, particularly considering the limited timeframe allocated for the project's completion. Consequently, only the rocking chair model has a texture applied to it.

## References

A portion of the models in our collection were crafted by our team, while an additional set of models were sourced directly from pre-existing designs contributed by other individuals on Tinkercad. In the subsequent section, we will provide proper attribution and references for these externally acquired models that are not of our own creation.

- [Teddy Bear](https://www.tinkercad.com/things/27Kl1sOmNX9)
- [Wooden End Table](https://www.tinkercad.com/users/1XbudJN30hX)
- [Coffee Mug](https://www.tinkercad.com/things/hAg4PEdJc83)
- [Beach Pail](https://www.tinkercad.com/users/1XbudJN30hX)
- [Wooden Chair](https://www.tinkercad.com/users/57fIC9DfgmF)
- [Toy Box](https://www.tinkercad.com/users/0UEdIRinCgR)
- [Duckie](https://www.tinkercad.com/things/icTpwTAkJcB)
- [Solid Panel Door](https://www.tinkercad.com/users/1XbudJN30hX)
- [Books Lined Up](https://www.tinkercad.com/users/e6lK6NUkK8G)
- [Brown Rocking Chair](https://www.tinkercad.com/users/1XbudJN30hX)

## Demo Video

[Monsters Inc's Room](https://youtu.be/pOQRwMz0Be0)

## Contributors

- [Karen Hernández](https://github.com/karenhernandeze)
- [Santiago Alcérreca](https://github.com/santiadlv)

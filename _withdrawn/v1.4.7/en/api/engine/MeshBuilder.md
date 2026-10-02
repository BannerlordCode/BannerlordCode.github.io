---
title: "MeshBuilder"
description: "MeshBuilder — class in TaleWorlds.Engine. 8 public members (3 static)."
---

<!-- v147-skeleton -->
# MeshBuilder

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public class MeshBuilder`  
**Source:** `TaleWorlds.Engine/MeshBuilder.cs`

## Overview

`MeshBuilder` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MeshBuilder`.
- **Static entry points** (3): `CreateUnitMesh`, `CreateTilingWindowMesh`, `CreateTilingButtonMesh`.
- **Instance members** (4): `AddFaceCorner`, `AddFace`, `Clear`, `Finalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateTilingButtonMesh` | method (static) | Static entry point. Takes 4 arguments: `string baseMeshName`, `Vec2 meshSizeMin`, `Vec2 meshSizeMax`, `Vec2 borderThickness`. Returns `Mesh`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateTilingWindowMesh` | method (static) | Static entry point. Takes 5 arguments: `string baseMeshName`, `Vec2 meshSizeMin`, `Vec2 meshSizeMax`, `Vec2 borderThickness`, …. Returns `Mesh`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateUnitMesh` | method (static) | Static entry point. Takes no arguments. Returns `Mesh`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `AddFace` | method | Instance entry point. Takes 3 arguments: `int patchNode0`, `int patchNode1`, `int patchNode2`. Returns `int`. Adds to the collection or relation this type owns. |
| `AddFaceCorner` | method | Instance entry point. Takes 4 arguments: `Vec3 position`, `Vec3 normal`, `Vec2 uvCoord`, `uint color`. Returns `int`. Adds to the collection or relation this type owns. |
| `Clear` | method | Instance entry point. Takes no arguments. |
| `Finalize` | method | Instance entry point. Takes no arguments. Returns `Mesh`. |
| `MeshBuilder` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MeshBuilder()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var meshBuilder = new MeshBuilder();
MeshBuilder.CreateUnitMesh();
MeshBuilder.CreateTilingWindowMesh(baseMeshName, meshSizeMin, meshSizeMax, borderThickness, bgBorderThickness);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Engine/MeshBuilder.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/engine/](../) — the other types in this bucket.

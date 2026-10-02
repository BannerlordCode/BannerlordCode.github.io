---
title: "CharacterCreationStageViewAttribute"
description: "CharacterCreationStageViewAttribute — class in SandBox.View.CharacterCreation. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationStageViewAttribute

**Namespace:** `SandBox.View.CharacterCreation`  
**Module:** `SandBox.View`  
**Type:** `public sealed class CharacterCreationStageViewAttribute : Attribute`  
**Base:** `Attribute`  
**Source:** `SandBox.View/CharacterCreation/CharacterCreationStageViewAttribute.cs`

## Overview

`CharacterCreationStageViewAttribute` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Attribute, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterCreationStageViewAttribute`.
- **Data and constants** (1): `StageType`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CharacterCreationStageViewAttribute` | ctor | Instance entry point. Takes 1 argument: `Type stageType`. Returns ``. |
| `StageType` | field | Instance entry point `Type` field — direct storage with no validation or notification. |

- Constructed as `public CharacterCreationStageViewAttribute(Type stageType)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Attribute.
var characterCreationStageViewAttribute = new CharacterCreationStageViewAttribute(stageType);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `SandBox.View/CharacterCreation/CharacterCreationStageViewAttribute.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.

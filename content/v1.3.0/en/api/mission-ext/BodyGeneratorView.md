---
title: "BodyGeneratorView"
description: "Auto-generated class reference for BodyGeneratorView."
---
# BodyGeneratorView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BodyGeneratorView : IFaceGeneratorHandler`
**Base:** `IFaceGeneratorHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs`

## Overview

`BodyGeneratorView` is the character-creation / barber face editor: it owns a **dedicated 3-D scene**, a camera, and the Gauntlet panel that drives the sliders. It implements `IFaceGeneratorHandler` (`BodyGeneratorView.cs:21`), the interface the `FaceGenVM` data source calls back through for camera changes and character refresh.

Its constructor is the entry point and it is very large — fourteen parameters, of which **eight are optional** and six are navigation callbacks (`BodyGeneratorView.cs:54`). The shipped callers are `CharacterCreationFaceGeneratorView` (`CharacterCreationFaceGeneratorView.cs:40`), which passes the full callback set, and `GauntletBarberScreen` (`GauntletBarberScreen.cs:33`), which passes only the two stage actions and a filter, leaving every callback null.

The constructor creates a whole world: a `BodyGenerator` for the character (`BodyGeneratorView.cs:63`), a scene read from the hard-coded resource `character_menu_new` with physics disabled (`BodyGeneratorView.cs:128`, `BodyGeneratorView.cs:131`, `BodyGeneratorView.cs:132`), a camera positioned at the literal `Vec3(6.45f, 5.15f, 1.75f, -1f)` (`BodyGeneratorView.cs:144`), a `SceneLayer` (`BodyGeneratorView.cs:146`) and finally a `GauntletLayer` at id `1` that takes focus and installs `InputUsageMask.All` restrictions (`BodyGeneratorView.cs:96`, `BodyGeneratorView.cs:97`, `BodyGeneratorView.cs:101`, `BodyGeneratorView.cs:102`). So constructing this type opens a render scene and takes over input — it is not a cheap object to build in a tick.

The one **static** member that mods use is `InitCamera(Camera, Vec3)`, declared at `BodyGeneratorView.cs:699`. The character-creation stage views call it to place their own camera to match: `CharacterCreationNarrativeStageView.cs:86`, `CharacterCreationOptionsStageView.cs:75`, `CharacterCreationReviewStageView.cs:75`.

## Mental Model

The navigation callbacks change what the panel *is*. If any of `getCurrentStageIndexAction`, `getTotalStageCountAction` or `getFurthestIndexAction` is null, the view constructs the `FaceGenVM` in **standalone mode** with hard-coded stage counts `0, 0, 0` (`BodyGeneratorView.cs:77`, `BodyGeneratorView.cs:79`) and passes `false` for the "is part of a stage sequence" flag. Otherwise it calls all three and passes `true` (`BodyGeneratorView.cs:83`). So the difference between "a face generator" and "step 2 of 5 in character creation" is entirely the null-ness of three callbacks, and the branch is an `if` on any one of them — supplying only two of the three silently degrades you to standalone.

The multiplayer flag cuts several features at once. `_openedFromMultiplayer` is read once in the constructor (`BodyGeneratorView.cs:62`, `BodyGeneratorView.cs:76`) and gates the template-body-properties cache (`BodyGeneratorView.cs:104` through `BodyGeneratorView.cs:106`) and the debug hot-key block in `OnTick` (`BodyGeneratorView.cs:257`). So the debug face-shaping keys exist only when the editor was **not** opened from multiplayer — an odd asymmetry that reads like a leftover.

The extra weapon slot is cleared at construction if it holds a banner (`BodyGeneratorView.cs:65`, `BodyGeneratorView.cs:67`) — a banner in the face generator's preview equipment would otherwise be rendered. `_dressedEquipment` defaults to a clone of the character's own equipment when none is passed (`BodyGeneratorView.cs:64`).

`OnTick` is guarded at every level, which is what makes the class safe to leave running. `ReadyToRender()` requires both the scene layer and its `SceneView` to be non-null before delegating (`BodyGeneratorView.cs:224`), and the tick body itself only proceeds when `this.SceneLayer != null && this.SceneLayer.ReadyToRender()` (`BodyGeneratorView.cs:231`). Several members — `OnHeightChanged`, `OnAgeChanged`, `ResetFaceToDefault`, `SetNewBodyPropertiesAndBodyGen` — are public, so external code can drive the generator directly without going through the panel.

The static debug commands are string parsers, not functions: `FaceGenShowDebug(List<string>)` and `FaceGenUpdateDeformKeys(List<string>)` take a console argument list and return a status line (`BodyGeneratorView.cs:207`, `BodyGeneratorView.cs:210`, `BodyGeneratorView.cs:215`, `BodyGeneratorView.cs:218`). They are invoked from the debug console, which is why they take `List<string>` and return `string`.

## How to use

**Getting it.** Construct it directly — there is no factory and no registration. Pass a `ControlCharacterCreationStage` for each action and a `TextObject` for each label; pass `null` for the navigation callbacks unless you are building a multi-stage flow.

```csharp
using TaleWorlds.Core;
using TaleWorlds.GauntletUI;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator;
using TaleWorlds.ScreenSystem;

var view = new BodyGeneratorView(
    affirmativeAction: new ControlCharacterCreationStage(OnFinish),
    affirmativeActionText: TextObject.FromString("Done"),
    negativeAction: new ControlCharacterCreationStage(OnCancel),
    negativeActionText: TextObject.FromString("Cancel"),
    character: Hero.MainHero.CharacterObject,
    openedFromMultiplayer: false,
    filter: null);

// The static helper the character-creation stage views use to match the camera.
MatrixFrame frame = BodyGeneratorView.InitCamera(camera, new Vec3(6.45f, 5.15f, 1.75f, -1f));
```

Drive the generator directly, the way the sliders do:

```csharp
view.ResetFaceToDefault();          // public, no panel interaction needed
if (view.SceneLayer != null && view.SceneLayer.ReadyToRender())
{
    view.RefreshCharacterEntity();   // via IFaceGeneratorHandler
}
```

**The mistake that puts a banner in the face generator's preview.** Passing an `Equipment` whose `ExtraWeaponSlot` holds a banner and expecting it to render. The constructor inspects that slot and replaces the element with `EquipmentElement.Invalid` (`BodyGeneratorView.cs:65` through `BodyGeneratorView.cs:67`) — so the banner is silently dropped, no exception, and you conclude the equipment loader is broken when in fact the view removed it on purpose.

## Key Properties

| Name | Signature |
|------|-----------|
| `DataSource` | `public FaceGenVM DataSource { get; }` |
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |
| `BodyGen` | `public BodyGenerator BodyGen { get; }` |

## Key Methods

### ResetFaceToDefault
`public void ResetFaceToDefault()`

**Purpose:** Returns face to default to its default or initial condition.

```csharp
// Obtain an instance of BodyGeneratorView from the subsystem API first
BodyGeneratorView bodyGeneratorView = ...;
bodyGeneratorView.ResetFaceToDefault();
```

### FaceGenShowDebug
`public static string FaceGenShowDebug(List<string> strings)`

**Purpose:** Executes the FaceGenShowDebug logic.

```csharp
// Static call; no instance required
BodyGeneratorView.FaceGenShowDebug(strings);
```

### FaceGenUpdateDeformKeys
`public static string FaceGenUpdateDeformKeys(List<string> strings)`

**Purpose:** Executes the FaceGenUpdateDeformKeys logic.

```csharp
// Static call; no instance required
BodyGeneratorView.FaceGenUpdateDeformKeys(strings);
```

### ReadyToRender
`public bool ReadyToRender()`

**Purpose:** Reads the data or state of y to render.

```csharp
// Obtain an instance of BodyGeneratorView from the subsystem API first
BodyGeneratorView bodyGeneratorView = ...;
var result = bodyGeneratorView.ReadyToRender();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of BodyGeneratorView from the subsystem API first
BodyGeneratorView bodyGeneratorView = ...;
bodyGeneratorView.OnTick(0);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of BodyGeneratorView from the subsystem API first
BodyGeneratorView bodyGeneratorView = ...;
bodyGeneratorView.OnFinalize();
```

### InitCamera
`public static MatrixFrame InitCamera(Camera camera, Vec3 cameraPosition)`

**Purpose:** Prepares the resources, state, or bindings required by camera.

```csharp
// Static call; no instance required
BodyGeneratorView.InitCamera(camera, cameraPosition);
```

## Usage Example

```csharp
The `BodyGeneratorView view = ...;` placeholder previously on this page was not a runnable line. The type has a single, very wide public constructor and no factory; the shorthand form is:

```csharp
var view = new BodyGeneratorView(affirmativeAction, affirmativeText,
                                 negativeAction, negativeText,
                                 character, openedFromMultiplayer: false, filter: null);
```
```

## See Also

- [CharacterThumbnailCreationData — the face generator's rendered output ends up in this cache](../CharacterThumbnailCreationData)
- [FaceGeneratorMissionView — the unreferenced mission view that pushes this screen](../FaceGeneratorMissionView)
- [CraftingPieceCreationData — the sibling thumbnail request object](../CraftingPieceCreationData)
- [Area Index](../)
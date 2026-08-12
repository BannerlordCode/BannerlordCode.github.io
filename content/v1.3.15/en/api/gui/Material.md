---
title: "Material"
description: "The abstract base class for a 2D/UI draw call's shading parameter bundle in the TwoDimension layer — it says how a sprite, text, or solid polygon is submitted to the renderer (blend mode + in-frame order); mods usually reach a concrete subclass through Brush/Sprite, or build one themselves to drive TwoDimensionDrawContext."
---

# Material

**Namespace:** `TaleWorlds.TwoDimension`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `public abstract class Material`  
**Base:** none  
**Source:** `TaleWorlds.TwoDimension/Material.cs`

## Responsibility (one line)

`Material` is the **"shading parameter bundle" for one 2D draw call**: it describes how a primitive (a sprite, text, or solid polygon) is submitted to the TwoDimension draw backend — with which blend mode (`Blending`) and in what in-frame order (`RenderOrder`). The actual visual parameters live in `SimpleMaterial` / `TextMaterial` / `PrimitivePolygonMaterial`; mods almost never `new` the base class directly, but instead obtain a concrete subclass indirectly via `Brush`→`Sprite`, or construct one themselves to feed `TwoDimensionDrawContext`.

## Overview

`Material` is the lightweight abstract base that every 2D-drawable visual in the Gauntlet/TaleWorlds UI stack ultimately boils down to. It is deliberately tiny: the base class holds only two immutable fields, `Blending` (whether alpha blending is on) and `RenderOrder` (the draw order within a frame, used to resolve overlap). All the "look" — textures, color factors, circular masks, nine-patch borders, overlays, text outline/glow/shadow — is carried by the concrete subclasses `SimpleMaterial`, `TextMaterial`, and `PrimitivePolygonMaterial`.

Crucially, `Material` is **not** the engine's 3D `TaleWorlds.Engine.Material` (a `sealed class Material : Resource` with shader-flag bit operations, `GetFromResource`, and `SetTexture(MBTextureType, ...)`). The TwoDimension `Material` holds no `Shader` reference and does no shader-flag math; it is closer to an instruction of "draw this batch of vertices + texture with this set of color/blend parameters." Widgets such as `RichTextWidget` construct a `SimpleMaterial` from a `Sprite`'s `Texture` every frame and then sync the `Brush`'s `GlobalColor` / `GlobalAlphaFactor` into it — so almost every sprite/text tint you see in the UI is actually some `Material` subclass working underneath.

## Mental Model

Think of `Material` as the "material" of the 2D world. It is the abstract base for a single 2D draw call's shading parameters: a primitive (sprite, text, or solid polygon) is submitted to the TwoDimension backend with a specific blend mode (`Blending`) and a specific in-frame order (`RenderOrder`). The base class itself owns nothing visual — `Blending` and `RenderOrder` are the only state, set once by the `protected` constructor and then immutable (`get; private set;`). The real "appearance" is entirely in the subclasses: textures, color/H/S/V factors, circular masks, nine-patch, overlays, and text stroke/glow/shadow. `Material` does not reference a `Shader` and does not manipulate shader flags; it is best understood as the "how to shade" half of a draw, while the draw object (geometry + texture coordinates) is the "where and how big" half passed alongside it to `TwoDimensionDrawContext.Draw`.

Its relationship to Gauntlet UI is indirect but real: a `Brush` is a named visual recipe (sprite name, color, font, layers); a widget resolves the `Brush` into a `Sprite` during its `UpdateBrushes` phase; and the `Sprite`'s drawing eventually lands on a 2D material such as `SimpleMaterial`. The typical internal chain is `RichTextWidget` taking `sprite.Texture` and doing `new SimpleMaterial(sprite.Texture)`, then each frame syncing the `Brush`'s `GlobalColor` / `GlobalAlphaFactor` into the material — so most sprite/text shading you see on screen is really some `Material` subclass doing the work.

### Lifecycle

1. Typically constructed by the TwoDimension draw layer or a concrete widget (e.g. `RichTextWidget`) once it has a `Sprite`/`Texture`, via `new SimpleMaterial(texture, renderOrder)` or `new TextMaterial(texture, renderOrder)`; `PrimitivePolygonMaterial` is constructed by code that needs a solid polygon (e.g. a launcher background) with `new PrimitivePolygonMaterial(color, renderOrder)`.
2. High-frequency drawing reuses objects through `MaterialPool<T>`: at frame start `ResetAll()` returns all previous-frame objects to the pool; during drawing `New()` hands out one (reusing a pooled instance on a hit, otherwise `new T()` and appending). This avoids per-frame `new` and the resulting GC churn.
3. The base class has a single constructor entry, `protected Material(bool blending, int renderOrder)`; it sets `Blending` and `RenderOrder`. Both properties are `get; private set;` and immutable after construction — to change order or blending you must construct a differently-parameterized material.
4. When drawing, the material is handed to `TwoDimensionDrawContext.Draw(material, ref drawObject)` together with the geometry/texture-coordinate struct; the material decides "how to shade", the draw object decides "where and how big".
5. At frame end `MaterialPool.ResetAll()` zeroes the cursor; the concrete materials in the pool are reused rather than collected, so you should not hold a pooled object across frames and assume its fields stay stable.

## When to use

- When you need custom 2D drawing (map overlays, charts, hand-drawn HUD elements, launcher backgrounds), construct a `SimpleMaterial` / `TextMaterial` / `PrimitivePolygonMaterial` and submit it to `TwoDimensionDrawContext`.
- When drawing many instances per frame, reuse material objects with `MaterialPool<T>` (e.g. `MaterialPool<SimpleMaterial>`) to cut allocations.
- When you want to draw from a `Sprite`, start from `sprite.Texture`, construct a `SimpleMaterial`, then set `ColorFactor` / `AlphaFactor` / `Color` as needed.

## When NOT to use

- Do **not** `new TaleWorlds.TwoDimension.Material()` itself: it is `abstract` and its constructor is `protected`, so only a concrete subclass can be `new`-ed.
- Do **not** hold an object taken from `MaterialPool` across frames and assume its fields are unchanged: the next frame's `ResetAll` / `New` overwrites them (`RichTextWidget` caches a `SimpleMaterial` per `sprite.Texture` but still re-syncs `ColorFactor` / `AlphaFactor` / `Color` from the `Brush`'s `Global*` values every frame).
- Do **not** confuse `TaleWorlds.TwoDimension.Material` (abstract, 2D) with `TaleWorlds.Engine.Material` (sealed `: Resource`, 3D, with `GetShaderFlags` / `AddMaterialShaderFlag` / `SetTexture(MBTextureType, ...)`). Different namespace, purpose, and acquisition path.
- Do **not** construct or mutate a material on a background thread and immediately hand it to the draw call: 2D drawing happens on the UI thread, so cross-thread field writes race or silently fail to draw.

## Dependencies

```mermaid
graph TD
    SPRITE[Sprite / Texture] --> SIM[SimpleMaterial]
    BRUSH[Brush] --> SPRITE
    WIDGET[Widget.UpdateBrushes] --> BRUSH
    WIDGET --> RTW[RichTextWidget]
    RTW --> NEW[new SimpleMaterial(sprite.Texture)]
    NEW --> POOL[MaterialPool T New / ResetAll]
    POOL --> DRAW[TwoDimensionDrawContext.Draw]
    MAT[Material abstract base: Blending, RenderOrder] --> SIM
    MAT --> TM[TextMaterial]
    MAT --> PM[PrimitivePolygonMaterial]
    SIM --> DRAW
    TM --> DRAW
    PM --> DRAW
```

- Upstream look: [Brush](../Brush) resolves into a `Sprite`, which widgets consume during the [Widget](../Widget) `UpdateBrushes` phase. The lower-level draw resources are [Shader](../Shader) and [Texture](../Texture).
- Host layer: [GauntletLayer](../../engine/GauntletLayer) provides the `UIContext` and the TwoDimension draw backend — the runtime that actually draws the material.
- Data side: a material only reflects appearance and does not hold campaign/mission state; when you need to recolor by world state, compute it in [ViewModel](../../core-extra/ViewModel) and then rewrite the `Brush` / `Material` copy.
- Crash surface: see the "UI thread / lifecycle" section of [Crash & Save Boundaries](../../../architecture/crash-boundaries).

## Key members and when they are called

### Abstract base `Material` (from `TaleWorlds.TwoDimension/Material.cs`)

- `bool Blending { get; private set; }` — whether alpha blending is enabled. Set by the `protected` constructor at creation; transparent layering depends on it.
- `int RenderOrder { get; private set; }` — in-frame draw order (lower draws first, higher draws later; used to resolve occlusion). Also set at construction, then immutable.
- `protected Material(bool blending, int renderOrder)` — the only constructor entry; **every** concrete subclass must call `base(blending, renderOrder)`.

### Concrete subclass `SimpleMaterial` (sprite/texture drawing — most common)

- Constructors: `SimpleMaterial()`, `SimpleMaterial(Texture)`, `SimpleMaterial(Texture, int renderOrder)`, `SimpleMaterial(Texture, int renderOrder, bool blending)`. The `Texture`-only and `(Texture, renderOrder)` overloads default `blending` to `true`.
- `Texture Texture`, `Color Color`, `float ColorFactor` / `AlphaFactor` / `HueFactor` / `SaturationFactor` / `ValueFactor` — texture and HSV/color modulation. After `Reset`, `ColorFactor = 1`, `AlphaFactor = 1`, `HueFactor/SaturationFactor/ValueFactor = 0`, `Color = White` are the defaults.
- Circular mask: `bool CircularMaskingEnabled`, `Vector2 CircularMaskingCenter`, `float CircularMaskingRadius`, `CircularMaskingSmoothingRadius`.
- Nine-patch: `SpriteNinePatchParameters NinePatchParameters` (taken from a `Sprite`, for stretchable borders).
- Overlay: `bool OverlayEnabled`, `Texture OverlayTexture`, `bool UseOverlayAlphaAsMask`, `float OverlayTextureWidth` / `OverlayTextureHeight`, `OverlayXOffset` / `OverlayYOffset`, `Vector2 StartCoordinate` / `Size`, `float Scale`.
- `void Reset(Texture texture = null)` — resets fields to defaults (color factors to 1, color to white, mask and overlay off, `OverlayTextureWidth/Height` to 512). The draw system calls this when reusing pooled objects each frame.

### Concrete subclass `TextMaterial` (text drawing)

- Constructors mirror `SimpleMaterial`'s shape: `TextMaterial()` / `(Texture)` / `(Texture, int renderOrder)` / `(Texture, int renderOrder, bool blending)`.
- Text appearance: `Color Color`, `float SmoothingConstant` (default `0.47f`), `bool Smooth` (default `true`), `float ScaleFactor` (default `1f`), `Color GlowColor` / `OutlineColor`, `float OutlineAmount` / `GlowRadius` / `Blur` / `ShadowOffset` / `ShadowAngle`, plus `ColorFactor` / `AlphaFactor` / `HueFactor` / `SaturationFactor` / `ValueFactor`.
- `void CopyFrom(TextMaterial sourceMaterial)` — copies the whole parameter set from the source material (not a `Clone`, but the standard way to reuse an object at runtime).

### Concrete subclass `PrimitivePolygonMaterial` (solid polygon)

- Constructors: `PrimitivePolygonMaterial(Color)`, `(Color, int renderOrder)`, `(Color, renderOrder, bool blending)`.
- `Color Color { get; private set; }` — the polygon fill color, set at construction and then immutable.

### Reuse pool `MaterialPool<T>` (high-frequency drawing)

- `MaterialPool(int initialBufferSize)` — builds the pool with the given initial capacity.
- `T New()` — if the cursor is below the list count, reuses an existing object; otherwise `new T()` and appends. Returns an object usable for this frame's drawing.
- `void ResetAll()` — zeroes the cursor so allocation restarts from the head next frame — **call this at the start of every frame's drawing**.

## Risk and crash boundaries

1. **Cannot `new` the abstract base.** A direct `new Material()` will not compile; and because the base constructor is `protected`, only concrete subclasses (`SimpleMaterial` / `TextMaterial` / `PrimitivePolygonMaterial`) can be `new`-ed.
2. **Pooled object mutated.** An object taken from `MaterialPool` is reused within the same frame; do not save a reference across frames and assume `ColorFactor` / `AlphaFactor` / etc. stay constant — the next frame's `ResetAll` / `New` overwrites them.
3. **Cross-thread drawing.** 2D drawing happens on the UI thread; constructing or mutating a material on a background thread and handing it to `TwoDimensionDrawContext.Draw` races or silently fails to draw.
4. **Namespace confusion.** `TwoDimension.Material` (abstract, 2D, only `Blending` / `RenderOrder`) and `Engine.Material` (sealed `: Resource`, 3D, with `GetShaderFlags` / `AddMaterialShaderFlag` / `SetTexture(MBTextureType, ...)`) are not the same API; their acquisition and parameter-setting differ — do not mix them.
5. **`Blending` / `RenderOrder` are immutable.** They are `private set` after construction; to change blending or order you must construct a differently parameterized material.
6. **Texture lifetime.** `SimpleMaterial` / `TextMaterial` reference a `Texture` directly; if that `Texture` is freed or swapped while the material is still being drawn, you get an empty draw or an error. Ensure the `Texture`'s lifetime is at least as long as the material's use.

## Real examples

### 1.4.5 — the real acquisition path inside `RichTextWidget`

`TaleWorlds.GauntletUI.BaseTypes/RichTextWidget.cs:361` shows where mods most often "meet" a `Material`: it caches a `SimpleMaterial` per `Sprite`'s texture, then syncs the `Brush`'s global color/alpha into it:

```csharp
// Inside RichTextWidget.RenderImage: sprite.Texture -> SimpleMaterial
if (!_textureMaterialDict.ContainsKey(sprite.Texture))
{
    _textureMaterialDict[sprite.Texture] = new SimpleMaterial(sprite.Texture);
}
SimpleMaterial simpleMaterial = _textureMaterialDict[sprite.Texture];
simpleMaterial.ColorFactor = base.ReadOnlyBrush.GlobalColorFactor;
simpleMaterial.AlphaFactor = base.ReadOnlyBrush.GlobalAlphaFactor * base.Context.ContextAlpha;
simpleMaterial.Color = base.ReadOnlyBrush.GlobalColor;
```

### 1.4.5 — custom 2D drawing with `MaterialPool` + `SimpleMaterial`

```csharp
// In a custom TwoDimension draw extension, UIContext gives you a TwoDimensionDrawContext.
// Reuse per-frame materials with MaterialPool to avoid GC churn.
MaterialPool<SimpleMaterial> pool = new MaterialPool<SimpleMaterial>(64);
pool.ResetAll();                       // Start of each frame: return all last-frame materials

SimpleMaterial mat = pool.New();       // Reuse or create a SimpleMaterial
mat.Reset(myTexture);                  // Reset to defaults (ColorFactor=1, Color=white, no mask)
mat.ColorFactor = 1f;
mat.AlphaFactor = alpha;
mat.Color = globalColor;               // Synced from something like Brush.GlobalColor
drawContext.Draw(mat, ref drawObject); // Submit with the geometry to the 2D backend
```

### 1.4.5 — `PrimitivePolygonMaterial` for a solid background

```csharp
// TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs:73 draws the background with PrimitivePolygonMaterial
PrimitivePolygonMaterial bg = new PrimitivePolygonMaterial(new Color(0.5f, 0.5f, 0.5f), 0);
drawContext.Draw(bg, ref backgroundDrawObject);
```

`Material` / `SimpleMaterial` / `TextMaterial` / `PrimitivePolygonMaterial` / `MaterialPool<T>` come from `TaleWorlds.TwoDimension/Material.cs`, `SimpleMaterial.cs`, `TextMaterial.cs`, `PrimitivePolygonMaterial.cs`, `MaterialPool.cs`; the `RichTextWidget` acquisition path is from `TaleWorlds.GauntletUI.BaseTypes/RichTextWidget.cs`.

## Version notes

The `TwoDimension.Material` base is identical between 1.3.15 and 1.4.5 (only `Blending` / `RenderOrder` plus the `protected` constructor), and the concrete subclasses `SimpleMaterial` / `TextMaterial` / `PrimitivePolygonMaterial` and `MaterialPool<T>` all exist. The engine-layer `TaleWorlds.Engine.Material` is a separate thing (3D, `: Resource`) and must not be confused with this page. If a target version lacks a specific module's source, still wire in via the `Sprite`/`Texture` → `SimpleMaterial` → `TwoDimensionDrawContext.Draw` and `MaterialPool<T>` reuse relationship, rather than assuming some module's custom material entry point exists.

## See Also

- ↑ Parent: [gui index](../)
- ↔ Siblings: [Brush](../Brush) · [Widget](../Widget) · [ScreenManager](../ScreenManager) · [Shader](../Shader) · [Texture](../Texture)
- Upstream host: [GauntletLayer](../../engine/GauntletLayer)
- Related: [ViewModel](../../core-extra/ViewModel) · [Crash & Save Boundaries](../../../architecture/crash-boundaries) · [Shader](../Shader) · [Texture](../Texture)

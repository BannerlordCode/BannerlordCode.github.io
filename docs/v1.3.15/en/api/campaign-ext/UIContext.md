<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UIContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UIContext

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `UIContext` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveCursorOfContext` | `public UIContext.MouseCursors ActiveCursorOfContext { get; set; }` |
| `IsDynamicScaleEnabled` | `public bool IsDynamicScaleEnabled { get; }` |
| `ScaleModifier` | `public float ScaleModifier { get; }` |
| `Name` | `public string Name { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `ContextAlpha` | `public float ContextAlpha { get; }` |
| `Scale` | `public float Scale { get; }` |
| `CustomScale` | `public float CustomScale { get; }` |
| `CustomInverseScale` | `public float CustomInverseScale { get; }` |
| `CurrentLanugageCode` | `public string CurrentLanugageCode { get; }` |
| `UIRandom` | `public Random UIRandom { get; }` |
| `InverseScale` | `public float InverseScale { get; }` |
| `EventManager` | `public EventManager EventManager { get; }` |
| `Root` | `public Widget Root { get; }` |
| `ResourceDepot` | `public ResourceDepot ResourceDepot { get; }` |
| `TwoDimensionContext` | `public TwoDimensionContext TwoDimensionContext { get; }` |
| `Brushes` | `public IEnumerable<Brush> Brushes { get; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |


## Key Methods

### Initialize

```csharp
public void Initialize()
```

### GetBrush

```csharp
public Brush GetBrush(string name)
```

### RefreshResources

```csharp
public void RefreshResources(SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)
```

### OnFinalize

```csharp
public void OnFinalize()
```

### Activate

```csharp
public void Activate()
```

### Deactivate

```csharp
public void Deactivate()
```

### Update

```csharp
public void Update(float dt)
```

### LateUpdate

```csharp
public void LateUpdate(float dt)
```

### RenderTick

```csharp
public void RenderTick(float dt)
```

### InitializeGamepadNavigation

```csharp
public void InitializeGamepadNavigation(IGamepadNavigationContext context)
```

### OnOnScreenkeyboardTextInputDone

```csharp
public void OnOnScreenkeyboardTextInputDone(string inputText)
```

### OnOnScreenKeyboardCanceled

```csharp
public void OnOnScreenKeyboardCanceled()
```

### HitTest

```csharp
public bool HitTest(Widget root, Vector2 position)
```

### HitTest

```csharp
public bool HitTest(Widget root)
```

### FocusTest

```csharp
public bool FocusTest(Widget root)
```

### SetIsMouseEnabled

```csharp
public void SetIsMouseEnabled(bool isMouseEnabled)
```

### UpdateInput

```csharp
public void UpdateInput(InputType handleInputs)
```

### OnMovieLoaded

```csharp
public void OnMovieLoaded(string movieName)
```

### OnMovieReleased

```csharp
public void OnMovieReleased(string movieName)
```

### DrawWidgetDebugInfo

```csharp
public void DrawWidgetDebugInfo()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
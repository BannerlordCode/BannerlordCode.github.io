<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UIContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UIContext

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`UIContext` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
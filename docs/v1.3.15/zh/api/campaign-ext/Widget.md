<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Widget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Widget

**命名空间:** TaleWorlds.GauntletUI.BaseTypes
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Widget` 是 `TaleWorlds.GauntletUI.BaseTypes` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ExtendLeft` | `public float ExtendLeft { get; set; }` |
| `ExtendRight` | `public float ExtendRight { get; set; }` |
| `ExtendTop` | `public float ExtendTop { get; set; }` |
| `ExtendBottom` | `public float ExtendBottom { get; set; }` |
| `VerticalFlip` | `public bool VerticalFlip { get; set; }` |
| `HorizontalFlip` | `public bool HorizontalFlip { get; set; }` |
| `NinePatchTop` | `public int NinePatchTop { get; set; }` |
| `NinePatchBottom` | `public int NinePatchBottom { get; set; }` |
| `NinePatchLeft` | `public int NinePatchLeft { get; set; }` |
| `NinePatchRight` | `public int NinePatchRight { get; set; }` |
| `ImageFit` | `public ImageFit ImageFit { get; set; }` |
| `GlobalRotation` | `public float GlobalRotation { get; }` |
| `Rotation` | `public float Rotation { get; set; }` |
| `PivotX` | `public float PivotX { get; set; }` |
| `PivotY` | `public float PivotY { get; set; }` |
| `Left` | `public float Left { get; }` |


## 主要方法

### GetAllChildrenAndThisRecursive

```csharp
public List<Widget> GetAllChildrenAndThisRecursive()
```

### ApplyActionToAllChildren

```csharp
public void ApplyActionToAllChildren(Action<Widget> action)
```

### ApplyActionToAllChildrenRecursive

```csharp
public void ApplyActionToAllChildrenRecursive(Action<Widget> action)
```

### GetAllChildrenRecursive

```csharp
public List<Widget> GetAllChildrenRecursive(Func<Widget, bool> predicate = null)
```

### GetAllParents

```csharp
public List<Widget> GetAllParents()
```

### AddComponent

```csharp
public void AddComponent(WidgetComponent component)
```

### AddState

```csharp
public void AddState(string stateName)
```

### ContainsState

```csharp
public bool ContainsState(string stateName)
```

### SetState

```csharp
public virtual void SetState(string stateName)
```

### FindChild

```csharp
public Widget FindChild(BindingPath path)
```

### FindChild

```csharp
public Widget FindChild(string singlePathNode)
```

### FindChild

```csharp
public Widget FindChild(WidgetSearchDelegate widgetSearchDelegate)
```

### FindChild

```csharp
public Widget FindChild(string id, bool includeAllChildren = false)
```

### GetFirstInChildrenAndThisRecursive

```csharp
public Widget GetFirstInChildrenAndThisRecursive(Func<Widget, bool> predicate)
```

### GetFirstInChildrenRecursive

```csharp
public Widget GetFirstInChildrenRecursive(Func<Widget, bool> predicate)
```

### RemoveAllChildren

```csharp
public void RemoveAllChildren()
```

### UpdateAnimationPropertiesSubTask

```csharp
public virtual void UpdateAnimationPropertiesSubTask(float alphaFactor)
```

### Measure

```csharp
public void Measure(Vector2 measureSpec)
```

### CheckIsMyChildRecursive

```csharp
public bool CheckIsMyChildRecursive(Widget child)
```

### AddChild

```csharp
public void AddChild(Widget widget)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
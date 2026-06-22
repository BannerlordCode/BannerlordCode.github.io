<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StackLayout`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackLayout

**命名空间:** TaleWorlds.GauntletUI.Layout
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`StackLayout` 是 `TaleWorlds.GauntletUI.Layout` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultItemDescription` | `public ContainerItemDescription DefaultItemDescription { get; }` |
| `LayoutMethod` | `public LayoutMethod LayoutMethod { get; set; }` |


## 主要方法

### GetItemDescription

```csharp
public ContainerItemDescription GetItemDescription(Widget owner, Widget child, int childIndex)
```

### MeasureChildren

```csharp
public Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale)
```

### OnLayout

```csharp
public void OnLayout(Widget widget, float left, float bottom, float right, float top)
```

### GetIndexForDrop

```csharp
public int GetIndexForDrop(Container widget, Vector2 draggedWidgetPosition)
```

### GetDropGizmoPosition

```csharp
public Vector2 GetDropGizmoPosition(Container widget, Vector2 draggedWidgetPosition)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ListPanel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ListPanel

**命名空间:** TaleWorlds.GauntletUI.BaseTypes
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ListPanel` 是 `TaleWorlds.GauntletUI.BaseTypes` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `StackLayout` | `public StackLayout StackLayout { get; }` |
| `AcceptDropPredicate` | `public override Predicate<Widget> AcceptDropPredicate { get; set; }` |
| `IsDragHovering` | `public override bool IsDragHovering { get; set; }` |
| `ResetSelectedOnLosingFocus` | `public bool ResetSelectedOnLosingFocus { get; set; }` |


## 主要方法

### GetIndexForDrop

```csharp
public override int GetIndexForDrop(Vector2 draggedWidgetPosition)
```

### GetDropGizmoPosition

```csharp
public override Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)
```

### OnChildSelected

```csharp
public override void OnChildSelected(Widget widget)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
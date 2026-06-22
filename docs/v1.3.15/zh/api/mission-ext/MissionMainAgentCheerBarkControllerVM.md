<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentCheerBarkControllerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMainAgentCheerBarkControllerVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMainAgentCheerBarkControllerVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `DisabledReasonText` | `public string DisabledReasonText { get; set; }` |
| `SelectedNodeText` | `public string SelectedNodeText { get; set; }` |
| `IsNodesCategories` | `public bool IsNodesCategories { get; set; }` |
| `Nodes` | `public MBBindingList<CheerBarkNodeItemVM> Nodes { get; set; }` |


## 主要方法

### OnFinalize

```csharp
public override void OnFinalize()
```

### SelectItem

```csharp
public void SelectItem(int itemIndex, int subNodeIndex = -1)
```

### ExecuteActivate

```csharp
public void ExecuteActivate()
```

### ExecuteDeactivate

```csharp
public void ExecuteDeactivate(bool applySelection)
```

### OnNodeFocused

```csharp
public void OnNodeFocused(CheerBarkNodeItemVM focusedNode)
```

### OnNodeTooltipToggled

```csharp
public void OnNodeTooltipToggled(CheerBarkNodeItemVM node)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
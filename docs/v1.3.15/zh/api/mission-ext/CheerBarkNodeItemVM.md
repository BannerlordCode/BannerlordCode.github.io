<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CheerBarkNodeItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CheerBarkNodeItemVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CheerBarkNodeItemVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `SubNodes` | `public MBBindingList<CheerBarkNodeItemVM> SubNodes { get; set; }` |
| `CheerNameText` | `public string CheerNameText { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasSubNodes` | `public bool HasSubNodes { get; set; }` |
| `TypeAsString` | `public string TypeAsString { get; set; }` |
| `TauntVisualName` | `public string TauntVisualName { get; set; }` |
| `SelectedNodeText` | `public string SelectedNodeText { get; set; }` |


## 主要方法

### ClearSelectionRecursive

```csharp
public void ClearSelectionRecursive()
```

### ExecuteFocused

```csharp
public void ExecuteFocused()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### AddSubNode

```csharp
public void AddSubNode(CheerBarkNodeItemVM subNode)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
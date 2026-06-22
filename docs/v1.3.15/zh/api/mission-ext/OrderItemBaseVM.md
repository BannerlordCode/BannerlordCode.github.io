<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderItemBaseVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderItemBaseVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`OrderItemBaseVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `OrderIconId` | `public string OrderIconId { get; set; }` |
| `SelectionState` | `public string SelectionState { get; set; }` |
| `Name` | `public string Name { get; set; }` |


## 主要方法

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshState

```csharp
public void RefreshState()
```

### ExecuteAction

```csharp
public void ExecuteAction(VisualOrderExecutionParameters executionParameters)
```

### SetShortcutKey

```csharp
public void SetShortcutKey(InputKeyItemVM inputKeyItem)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
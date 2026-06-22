<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TransferCommand`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TransferCommand

**命名空间:** TaleWorlds.CampaignSystem.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TransferCommand` 是 `TaleWorlds.CampaignSystem.Inventory` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `FromSideEquipment` | `public Equipment FromSideEquipment { get; }` |
| `ToSideEquipment` | `public Equipment ToSideEquipment { get; }` |
| `FromSide` | `public InventoryLogic.InventorySide FromSide { get; }` |
| `ToSide` | `public InventoryLogic.InventorySide ToSide { get; }` |
| `FromEquipmentIndex` | `public EquipmentIndex FromEquipmentIndex { get; }` |
| `ToEquipmentIndex` | `public EquipmentIndex ToEquipmentIndex { get; }` |
| `Amount` | `public int Amount { get; }` |
| `ElementToTransfer` | `public ItemRosterElement ElementToTransfer { get; }` |
| `Character` | `public CharacterObject Character { get; }` |


## 主要方法

### Transfer

```csharp
public static TransferCommand Transfer(int amount, InventoryLogic.InventorySide fromSide, InventoryLogic.InventorySide toSide, ItemRosterElement elementToTransfer, EquipmentIndex fromEquipmentIndex, EquipmentIndex toEquipmentIndex, CharacterObject character)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
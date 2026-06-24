<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SetWeaponAmmoData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SetWeaponAmmoData

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SetWeaponAmmoData : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/SetWeaponAmmoData.cs`

## 概述

`SetWeaponAmmoData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SetWeaponAmmoData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `WeaponEquipmentIndex` | `public EquipmentIndex WeaponEquipmentIndex { get; }` |
| `AmmoEquipmentIndex` | `public EquipmentIndex AmmoEquipmentIndex { get; }` |
| `Ammo` | `public short Ammo { get; }` |

## 使用示例

```csharp
var value = new SetWeaponAmmoData();
```

## 参见

- [完整类目录](../catalog)
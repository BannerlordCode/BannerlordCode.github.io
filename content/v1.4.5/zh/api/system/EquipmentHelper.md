---
title: "EquipmentHelper"
description: "把选定的 Equipment 装备配置复制到 Hero 对应的装备组。"
---
# EquipmentHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class EquipmentHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/EquipmentHelper.cs`

## 一句话职责

`EquipmentHelper` 把 [Equipment](../../core-extra/Equipment) 源值中的物品和修饰器复制到 [Hero](../../campaign/Hero) 对应的装备组。

## 心智模型

它是一个“写入目标”的辅助类，不是装备选择模型，也不是物品栏操作。调用方提供源 `Equipment`；helper 根据源类型选择 Hero 的目标装备组，然后写入全部 12 个槽位。源类型就是路由信号：

- `IsStealth` 为真时写入 `hero.StealthEquipment`。
- 否则 `IsCivilian` 为真时写入 `hero.CivilianEquipment`。
- 其他类型，包括 `EquipmentType.Battle`，都会写入 `hero.BattleEquipment`，因为 v1.4.5 实现在 stealth 分支后检查的是 `!equipment.IsCivilian`。

该 helper 没有返回值，也不会向 `EquipmentSelectionModel` 请求装备。装备选择属于 [EquipmentSelectionModel](../../campaign/EquipmentSelectionModel)，复制属于这里。

## 什么时候使用，什么时候不要使用

- **适合：** Campaign 模型或其他有源码依据的流程已经为 Hero 选出 `Equipment` 后，把它写入 Hero。
- **适合：** behavior 需要替换 Hero 的战斗、平民或 stealth 装备组，同时保留源槽位中的物品修饰器。
- **不要：** 把它当作向 party roster 添加物品的方法；它直接写入 `Hero` 装备槽位。
- **不要：** 用它选择装备配置；它不负责文化、年龄、家族或模型策略。
- **不要传入语义无关的 `EquipmentType`：** 非 civilian、非 stealth 的源会被当作 battle 装备路由。

## 公开入口

### `AssignHeroEquipmentFromEquipment`

```csharp
public static void AssignHeroEquipmentFromEquipment(Hero hero, Equipment equipment)
```

方法先根据 `equipment.IsStealth` 和 `equipment.IsCivilian` 选择目标，然后从槽位 `0` 循环到槽位 `11`。每个目标槽都会收到 `new EquipmentElement(equipment[i].Item, equipment[i].ItemModifier)`。返回值是 `void`，因此应通过 `hero.BattleEquipment`、`hero.CivilianEquipment` 或 `hero.StealthEquipment` 观察更新后的状态。

## 真实 Campaign 流程

原版 aging behavior 会从 `Campaign.Current.Models.EquipmentSelectionModel` 取得战斗和平民装备，再对 Hero 调用这个 helper。Mod behavior 如果确实需要刷新 Hero 装备，也应沿用同样有源码依据的形状：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

Hero hero = Hero.MainHero;
Equipment battleEquipment = Campaign.Current.Models.EquipmentSelectionModel
    .GetEquipmentForHeroComeOfAge(hero, Equipment.EquipmentType.Battle);
Equipment civilianEquipment = Campaign.Current.Models.EquipmentSelectionModel
    .GetEquipmentForHeroComeOfAge(hero, Equipment.EquipmentType.Civilian);

if (battleEquipment != null)
{
    EquipmentHelper.AssignHeroEquipmentFromEquipment(hero, battleEquipment);
}

if (civilianEquipment != null)
{
    EquipmentHelper.AssignHeroEquipmentFromEquipment(hero, civilianEquipment);
}
```

这是对 Hero 当前装备组的实际 mutation。真实 behavior 应在对应的 Campaign 转换时执行，不要在每个 tick 或 UI 刷新时重复调用。

## 依赖与所有权

- [Hero](../../campaign/Hero) 持有目标装备组：battle、civilian 和 stealth。
- [Equipment](../../core-extra/Equipment) 提供 `IsStealth`、`IsCivilian`、12 槽索引器和源 `EquipmentElement` 值。
- [EquipmentElement](../../core-extra/EquipmentElement) 在本 helper 中通过只传入 `Item` 和 `ItemModifier` 重建；源元素的 cosmetic item 与 quest-item 标记不会由这次构造调用复制。
- [EquipmentSelectionModel](../../campaign/EquipmentSelectionModel) 向 Campaign behavior 提供按策略选择的输入值。
- 原版 `AgingCampaignBehavior`、`InitialChildGenerationCampaignBehavior`、`NPCEquipmentsCampaignBehavior` 和 `CompanionRolesCampaignBehavior` 都是先决定转换，再调用 helper 的消费者。

## 风险与存档边界

- helper 直接写入选定的 Hero 装备组。调用后可能替换 12 个槽位中的现有物品，包括武器、护甲、马匹和马具槽。
- 源 `Equipment` 必须非 null，且其槽位必须适合目标；helper 在索引和赋值前不会执行高层的 null 或策略检查。
- 由于实现构造的是 `EquipmentElement(item, itemModifier)`，源元素的 cosmetic item 与 quest-item 元数据不会被这次复制保留。
- helper 不会单独保存副本。最终 Hero 装备属于 Hero Campaign 状态，存档兼容性和调用时机由所属 behavior 负责。
- 不要把这个操作与 `Equipment.FillFrom` 混淆；后者可以把装备填入另一个 `Equipment` 对象，并可选择是否复制源装备类型。

## 版本注记

本页按 v1.4.5 `EquipmentHelper.cs` 编写。公开类只有一个静态方法；选择规则和转换时机仍由模型与 Campaign behavior 调用方负责。

## 导航

- [↑ API 系统索引](../)
- [相关：Equipment](../../core-extra/Equipment)
- [相关：EquipmentElement](../../core-extra/EquipmentElement)
- [相关：Hero](../../campaign/Hero)
- [相关：EquipmentSelectionModel](../../campaign/EquipmentSelectionModel)

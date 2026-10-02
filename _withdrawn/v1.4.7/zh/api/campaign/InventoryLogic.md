---
title: "InventoryLogic"
description: "TaleWorlds.CampaignSystem.Inventory.InventoryLogic —— 命名空间 TaleWorlds.CampaignSystem.Inventory 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# InventoryLogic

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class InventoryLogic`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`

## 概述

`InventoryLogic` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.Inventory` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`（第 23 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，源码中未显式声明基类型；解析到的成员共 185 项，其中 15 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public Dictionary<CharacterObject, Equipment[]> CharacterEquipments { get; private set; }` — 属性，get/set，类型 Dictionary<CharacterObject, Equipment[]>
- `public PartyEquipment(MobileParty party)` — 方法，1 个参数，返回 P
- `public void InitializeCopyFrom(MobileParty party)` — 方法，1 个参数，返回 void
- `public void SetReference(InventoryLogic.PartyEquipment partyEquipment)` — 方法，1 个参数，返回 void
- `public bool IsEqual(InventoryLogic.PartyEquipment partyEquipment)` — 方法，1 个参数，返回 bool
- `public void RecordTransaction(int price, bool isSelling)` — 方法，2 个参数，返回 void
- `public bool GetLastTransaction(out int price, out bool isSelling)` — 方法，2 个参数，返回 bool
- `public IEnumerator<int> GetEnumerator()` — 方法，0 个参数，返回 IEnumerator<int>
- `public CapacityData(Func<int> getCapacity, Func<TextObject> getCapacityExceededWarningText, Func<TextObject> getCapacityExceededHintText, bool forceTransaction = false)` — 方法，4 个参数，返回 C
- `public int GetCapacity()` — 方法，0 个参数，返回 int
- `public bool CanForceTransaction()` — 方法，0 个参数，返回 bool
- `public TextObject GetCapacityExceededWarningText()` — 方法，0 个参数，返回 TextObject
- `public TextObject GetCapacityExceededHintText()` — 方法，0 个参数，返回 TextObject
- `public void Clear()` — 方法，0 个参数，返回 void
- `public bool GetLastTransfer(EquipmentElement equipmentElement, out int lastPrice, out bool lastIsSelling)` — 方法，3 个参数，返回 bool


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 15 条成员记录全部来自 `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class InventoryLogic` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign` API](../)
- [AcceptCallToWarAgreementDecision（同命名空间）](../AcceptCallToWarAgreementDecision)
- [AcceptCallToWarOfferMapNotification（同命名空间）](../AcceptCallToWarOfferMapNotification)
- [AccompanyingCharacter（同命名空间）](../AccompanyingCharacter)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)

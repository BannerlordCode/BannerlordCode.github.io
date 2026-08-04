---
title: "Equipment"
description: "战斗、平民或潜行装备的 12 槽快照；它组织 EquipmentElement，不等于部队库存。"
---
# Equipment

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class Equipment`  
**Base:** none  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/Equipment.cs`

## 一句话职责

`Equipment` 保存一个角色或装备模板在某个装备类型下的 12 个槽位，把每个槽位的 `EquipmentElement` 组织成可复制、校验和供 Agent/角色生成使用的装备集合。

## 心智模型

它是一张“装备配置表”，不是库存。`EquipmentType` 决定这是 `Battle`、`Civilian` 还是 `Stealth` 配置；`EquipmentIndex` 决定武器、护甲、马匹和马具槽位。每个槽里是一个值类型 `EquipmentElement`，其中引用 `ItemObject`，可选 `ItemModifier`、外观物品和任务物品标记。

角色、`CharacterObject`、`Hero` 和 `InventoryLogic` 持有这些配置的拷贝或快照。把物品放入 `Equipment` 不会自动在 Party 的 `ItemRoster` 增加数量；反过来，改 roster 也不会自动替换角色的装备槽。需要把装备转成库存或清理已穿戴装备时，必须沿角色生命周期/库存流程处理两边的状态。

## 何时用 / 何时不要用

### 适合使用

- 读取角色当前战斗/平民/潜行装备：`Hero.BattleEquipment`、`Hero.CivilianEquipment`、`Hero.StealthEquipment`。
- 用 `EquipmentIndex` 读取槽位，使用 `EquipmentElement.Item`、`ItemModifier`、`IsEmpty` 和 `GetModified*` 读取实际效果。
- 在生成角色、克隆模板或准备库存界面时使用 `Clone`、`FillFrom`、`IsEmpty`、`IsItemFitsToSlot` 和重量/护甲汇总方法。
- 需要独立改一份配置时先 `Clone`，再写入目标槽位；不要直接改仍被角色/模板共享的实例。

### 不要这样用

- 不要把 `Equipment` 当作 `ItemRoster`；给角色装备一个物品不会自动完成库存扣除、转移事件或 `HeroOrPartyGaveItem`。
- 不要把武器槽、护甲槽和马匹槽混用。设置器会调用 `IsItemFitsToSlot`，错误槽位会触发断言或导致视觉/Agent 生成不符合预期。
- 不要在 Agent 已经生成后仅修改 campaign `Equipment` 就期待当前 Agent 的 `MissionEquipment`/视觉立即改变；Mission 生命周期有自己的同步入口。
- 不要把 `EquipmentElement.Invalid` 当成一个可保存的物品，也不要保存临时未注册 `ItemObject` 的装备配置。

## 依赖关系

```text
CharacterObject / Hero / MBEquipmentRoster
        -> Equipment (Battle / Civilian / Stealth)
        -> Equipment[EquipmentIndex] = EquipmentElement
        -> ItemObject + ItemModifier + CosmeticItem
        -> CharacterData / AgentOrigin / InventoryLogic
        -> Party.ItemRoster (仅在明确的转库存流程中同步)
```

- **上游：** `CharacterObject` 的装备模板、`MBEquipmentRoster` 和 [Hero](../../campaign/Hero) 提供配置来源；`Campaign.Current` 还提供死亡角色的默认装备。
- **组合：** [EquipmentElement](../EquipmentElement) 是槽位的实际值，`ItemObject` 描述物品定义，`ItemModifier` 改变价格/护甲等派生值。
- **下游：** `CharacterData` 用装备码保存/重建角色装备；`AgentOriginUtilities`、Mission/Agent 生成逻辑读取重量、护甲和武器槽。
- **库存边界：** `CharacterData` 和库存流程会在角色装备与 Party roster 间转移 `EquipmentElement`。直接在一端写值，可能留下重复物品或丢失物品；跨持有者的转移应使用 [GiveItemAction](../../campaign-ext/GiveItemAction) / [SellItemsAction](../../campaign-ext/SellItemsAction)。

## 关键成员

| 成员 | 用途与副作用 |
|---|---|
| `ItemEquipmentType` / `IsBattle` / `IsCivilian` / `IsStealth` | 判断装备集合的语义；复制或应用时不要把一种配置误当成另一种。 |
| `this[int]` / `this[EquipmentIndex]` | 读取/设置槽位。设置会检查物品是否适合槽位，并写入固定长度的内部数组。 |
| `Horse` | 读取马匹槽；不要把它当作马具或库存中的马匹数量。 |
| `Clone(bool cloneWithoutWeapons)` / `FillFrom` | 生成独立快照或复制另一套槽位；`cloneWithoutWeapons` 只清除武器槽范围，不是把物品退回库存。 |
| `IsEmpty` / `GetTotalWeightOfArmor` / `GetTotalWeightOfWeapons` | 给角色选择、速度/负重和 Agent 生成提供派生结果；空槽可能返回默认体型/护甲结果。 |
| `GetHeadArmorSum` / `GetHumanBodyArmorSum` / `GetLegArmorSum` | 聚合护甲效果，包含 `ItemModifier` 对护甲的影响；不要直接把 ItemObject 基础护甲当作最终结果。 |
| `IsItemFitsToSlot` / `GetEquipmentFromSlot` | 在写入或检查槽位前验证 `EquipmentIndex`；索引错误应先被拒绝，不要靠异常后的状态继续运行。 |
| `SwapWeapons` / `GetInitialWeaponIndicesToEquip` | 为装备选择与 Agent 初始武器使用；这些方法只调整配置/选择，不派发库存或战斗事件。 |

## 真实获取与示例

### 读取英雄战斗装备并克隆一份

`Hero.MainHero.BattleEquipment` 是真实的 Campaign 获取路径。先克隆，才能在不直接污染英雄当前配置的情况下检查或准备候选装备：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

Equipment battle = Hero.MainHero.BattleEquipment;
Equipment candidate = battle.Clone(cloneWithoutWeapons: false);
EquipmentElement mainHand = candidate[EquipmentIndex.WeaponItemBeginSlot];

if (!mainHand.IsEmpty && candidate.GetTotalWeightOfWeapons() > 0f)
{
    int weaponValue = mainHand.ItemValue;
}
```

### 为已有配置设置一个符合槽位的元素

从已注册定义构造 `EquipmentElement`，先用 `IsItemFitsToSlot` 验证，再写入独立副本。这个操作仍只是配置变更；要让一个 Party 真正获得/失去物品，还要同步其 `ItemRoster` 或走库存流程：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("sword");
EquipmentElement element = new EquipmentElement(sword);
Equipment candidate = Hero.MainHero.BattleEquipment.Clone();

if (sword != null && Equipment.IsItemFitsToSlot(EquipmentIndex.WeaponItemBeginSlot, sword))
{
    candidate[EquipmentIndex.WeaponItemBeginSlot] = element;
}
```

## 风险与生命周期

- **共享/快照：** `CharacterObject` 模板装备、Hero 当前装备和 `Clone` 结果不是同一生命周期。修改模板可能影响之后创建的角色；修改 Hero 的当前装备可能影响角色存档和下一次 Agent 生成。
- **槽位合法性：** `Equipment` 固定 12 槽。错误的 `EquipmentIndex`、把马匹放入武器槽或把护甲当武器会触发 `IsItemFitsToSlot` 断言，随后产生装备、动画或 Agent 生成异常。
- **库存重复：** 角色装备中的 `EquipmentElement` 与 Party `ItemRoster` 都能引用同一个 `ItemObject`。在不走 `CharacterData`/库存流程的情况下既设置装备又加入 roster，可能复制物品；只清空装备又不返还 roster，可能丢物品。
- **Agent 边界：** Campaign `Equipment` 是生成输入；已存在的 Agent/Mission 使用另一套运行时状态。应在 Agent 创建/重装备的明确生命周期调用同步入口，不能把 campaign setter 当作实时 Mission API。
- **存档与身份：** `Equipment` 的槽位保存的是 `ItemObject`、`ItemModifier` 等对象引用/定义。使用未注册对象、失效 modifier 或在加载顺序之前拼装配置，会在读档时得到空槽或错误装备。

## 版本注意

本页按 v1.4.5 的 12 槽 `Equipment.cs`、`EquipmentIndex` 和 `EquipmentElement` 实现描述。1.3.15 的 slot 映射、装备模板和 Agent 读取点可能不同；跨版本代码应重新确认 `EquipmentIndex` 和目标模块的生命周期。

## 导航

- **↑ Parent:** [Core-extra API](./)
- **↔ Sibling:** [EquipmentElement](../EquipmentElement) · [EquipmentIndex](../EquipmentIndex) · [ItemObject](../ItemObject) · [ItemModifier](../ItemModifier)
- **相关类型:** [Hero](../../campaign/Hero) · [CharacterObject](../../campaign/CharacterObject) · [ItemRoster](../../campaign/ItemRoster) · [GiveItemAction](../../campaign-ext/GiveItemAction)

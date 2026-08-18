---
title: "Equipment"
description: "描述一个角色或 Agent 在战斗/平民/潜行配置下持有的 12 槽装备集合（由 EquipmentElement 组成），涵盖槽位读写、重量与护甲汇总、装备码序列化与随机拼装，并界定 Hero.BattleEquipment 与 Hero.CivilianEquipment 的读取与克隆边界。"
---

# Equipment

**命名空间：** TaleWorlds.Core
**模块：** TaleWorlds.Core
**类型：** public class Equipment
**源文件：** Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/Equipment.cs

## 概述

`Equipment` 是 `TaleWorlds.Core` 中的一个数据类，表示一个角色（英雄或角色模板）或战场 `Agent` 在某一装备类型（`EquipmentType`：`Battle`、`Civilian`、`Stealth`）下所穿戴的装备集合。它内部固定持有 12 个槽位（`EquipmentSlotLength = 12`），每个槽位是一个 `EquipmentElement`——引用一个 `ItemObject`，并可携带 `ItemModifier`、外观物品与任务物品标记。装备类型决定这是战斗、平民还是潜行配置；`EquipmentIndex` 决定武器、护甲、马匹与马具分别落在哪个槽位。Campaign 层（Hero / `CharacterObject` / `MBEquipmentRoster`）用它描述“某人穿什么”，Mission 层（Agent 生成、装备工具界面）也直接用同一类型作为生成输入。它只是一张有序的装备快照，不等于部队库存 `ItemRoster`。

## 心智模型

`Equipment` 位于 Core / Foundation 层，是 Campaign 与 Mission 共享的基础数据类型，不依赖任何一层：战役中的英雄、角色模板、装备花名册，以及战场上的 Agent，都直接持有或使用它。它不是一个规则模型，而是一张“装备配置表”——12 个固定槽位按顺序组织武器（0–4，含主手、副手与额外武器槽）、护甲（头/身/腿/手/披风，5–9）、马匹（10）与马具（11）。每个槽位在写入时会由 `IsItemFitsToSlot` 校验物品类型是否匹配目标槽，否则触发 `Debug.FailedAssert`，因此槽位语义是强约束的。它的生命周期有三种来源：一是从 XML / object 初始化（角色模板、`Deserialize`），二是从装备码重建（`CreateFromEquipmentCode` / `CalculateEquipmentCode`，用于存档与界面预览），三是从 `CharacterObject` 的 Battle / Civilian 装备集合中随机拼装（`GetRandomEquipmentElements`，用于 Agent 生成）。由于 Hero 当前装备、角色模板装备与 `Clone` 结果并不共享同一份底层数组，凡是需要独立修改一份配置时都应先 `Clone` 再写入；直接改仍被角色或模板共享的实例，会污染存档与后续生成。读取时通过 `Hero.BattleEquipment` / `Hero.CivilianEquipment` 区分战斗与平民配置，二者是彼此独立的 `Equipment` 实例，不要混用。

## 何时使用 / 何时不要使用

- **使用**
  - 读取角色当前战斗 / 平民 / 潜行装备：`Hero.MainHero.BattleEquipment`、`Hero.MainHero.CivilianEquipment`、`Hero.MainHero.StealthEquipment`。
  - 用 `EquipmentIndex` 通过索引器读取或写入某个槽位，结合 `EquipmentElement.Item`、`ItemModifier`、`IsEmpty` 与 `GetModified*` 读取实际效果。
  - 在生成角色、克隆模板、准备库存界面或做存档序列化时，使用 `Clone`、`FillFrom`、`IsEmpty`、`IsItemFitsToSlot` 与重量 / 护甲汇总方法。
  - 需要独立改一份配置时先 `Clone`，再写入目标槽位；不要直接改仍被角色 / 模板共享的实例。
- **不要使用**
  - 不要把 `Equipment` 当作 `ItemRoster`：往槽位放一个 `EquipmentElement` 不会自动从 Party 库存扣减数量，反向改 roster 也不会自动替换角色装备。需要真正的物品转移应走 [GiveItemAction](../../campaign-ext/GiveItemAction) / [SellItemsAction](../../campaign-ext/SellItemsAction)。
  - 不要把武器槽、护甲槽、马匹槽混用。设置器会调用 `IsItemFitsToSlot`，错误槽位会触发断言或导致视觉与 Agent 生成不符合预期。
  - 不要在 Agent 已经生成后，仅修改 Campaign 层的 `Equipment` 就期待当前 Agent 的运行时装备 / 视觉立即改变；Mission 有自己独立的同步入口。
  - 不要把 `EquipmentElement.Invalid` 当成可保存物品，也不要保存引用了未注册 `ItemObject` 的装备配置。

## 依赖图

上游类型与系统：

- [EquipmentElement](../EquipmentElement) —— 每个槽位真正持有的值；`Item` / `ItemModifier` / `CosmeticItem` 都挂在它上面。
- [ItemObject](../ItemObject) —— 物品定义本体，`IsItemFitsToSlot` 依据其 `ItemType` 决定能否放入某槽。
- [ItemModifier](../ItemModifier) —— 改变物品价格 / 护甲 / 伤害等派生值，参与 `GetTotalWeight*` 与 `Get*ArmorSum` 的计算。
- [EquipmentIndex](../EquipmentIndex) —— 槽位枚举；索引器、`AddEquipmentToSlotWithoutAgent`、`GetEquipmentFromSlot` 都以它为键。
- [EquipmentType](../EquipmentType) —— 装备语义（`Battle` / `Civilian` / `Stealth`），由 `ItemEquipmentType` / `IsBattle` 等暴露。
- [MBEquipmentRoster](../MBEquipmentRoster) —— 角色模板的 Battle / Civilian 装备集合，是 `GetRandomEquipmentElements` 的取样来源。

下游与协同系统（调用方）：

- [Hero](../../campaign/Hero) —— 暴露 `BattleEquipment` / `CivilianEquipment` / `StealthEquipment` 三个 `Equipment` 实例；`CharacterData` 在存档时对其调用 `CalculateEquipmentCode`。
- [CharacterObject](../../campaign/CharacterObject) —— 持有 `BattleEquipments` / `CivilianEquipments` 集合，被 `GetRandomEquipmentElements` 取样用于生成。
- [ItemRoster](../../campaign/ItemRoster) —— 部队库存；角色装备与库存间转移 `EquipmentElement` 需经库存流程，不能仅靠写入槽位。
- [MobileParty](../../campaign/MobileParty) —— 通过成员角色的 `Equipment` 决定外观与加成；库存转移走 `GiveItemAction` 等 Action。
- [Agent](../../mission/Agent) —— 战场单位运行时直接以 `Equipment` 作为生成输入（经 `AgentBuildData.Equipment`）。
- [Mission](../../mission/Mission) —— 生成逻辑（`SpawningBehaviorBase` 等）调用 `GetRandomEquipmentElements` 拼装战斗装备。

相关类型：

- [BasicCharacterObject](../BasicCharacterObject) —— `Equipment` / `EquipmentElement` 的上层持有者，`GetRandomEquipmentElements` 的首参类型。
- [CharacterCode](../CharacterCode) —— `CreateFromEquipmentCode` / `CalculateEquipmentCode` 的封装用户，用于角色外观码。

## 风险

- **共享 / 快照生命周期**：`CharacterObject` 模板装备、Hero 当前装备与 `Clone` 结果不是同一份底层数组。修改模板会影响之后创建的角色；修改 Hero 当前装备会影响角色存档与下一次 Agent 生成。
- **槽位合法性**：固定 12 槽。错误的 `EquipmentIndex`、把马匹放进武器槽或把护甲当武器，会触发 `IsItemFitsToSlot` 断言，随后产生装备、动画或 Agent 生成异常。
- **Battle 与 Civilian 混淆**：`Hero.BattleEquipment` 与 `Hero.CivilianEquipment` 是不同实例且 `EquipmentType` 不同。用错配置（如在战斗里套用平民装备）会导致模型 / 武器选择不符合预期。
- **EquipmentType 误用**：`IsBattle` / `IsCivilian` / `IsStealth` 只是读取语义标记；把一套 Battle 装备直接 `FillFrom` 进 Civilian 配置却不更新类型，会让 `GetRandomEquipmentElements` 与 Mission 按错误类型处理。
- **库存重复 / 丢失**：角色装备中的 `EquipmentElement` 与 Party `ItemRoster` 都能引用同一 `ItemObject`。在不走库存流程的情况下既设装备又加 roster，可能复制物品；只清装备不返还 roster，可能丢物品。
- **存档与身份**：槽位保存的是 `ItemObject` / `ItemModifier` 等对象引用。使用未注册对象、失效 modifier 或在加载顺序之前拼装配置，会在读档时得到空槽或错误装备。

## 成员说明

### 构造与生命周期

- **`Equipment()` / `Equipment(EquipmentType equipmentType)` / `Equipment(Equipment equipment)`**
  - 用途：三个构造函数。默认构造生成 12 个空槽、`_equipmentType = Invalid`；带类型参数时设定语义；带 `Equipment` 参数时逐槽深拷贝（每个槽 `new EquipmentElement(equipment[i])`）并复制类型。
  - 副作用：无写入外部状态，仅在自身 `_itemSlots` 上分配数组。
  - 调用时机：角色模板初始化、Agent 生成前、`Clone` / `CreateFromEquipmentCode` 内部都会 new 一个 `Equipment`。

- **`Clone(bool cloneWithoutWeapons = false)`**
  - 用途：返回一份独立的深拷贝；`cloneWithoutWeapons = true` 时把武器槽范围（索引 0–4）置为 `EquipmentElement.Invalid`，其余槽照拷。
  - 副作用：仅构造新实例，不会把武器退回任何库存。
  - 调用时机：需要先改一份装备又不想污染 Hero / 模板当前配置时，例如 `TutorialPhaseCampaignBehavior` 在教程开始前 `Hero.MainHero.BattleEquipment.Clone(false)` 做备份。

- **`FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)`**
  - 用途：把来源 `Equipment` 的全部 12 个槽位复制到自身；`useSourceEquipmentType = true` 时同时复制其 `EquipmentType`。
  - 副作用：直接覆盖自身槽位；若来源类型不同且带类型复制，会改变本实例的语义标记。
  - 调用时机：教程结束把备份还原回 Hero 时调用 `Hero.MainHero.BattleEquipment.FillFrom(_backup, true)`。

- **`Deserialize(MBObjectManager objectManager, XmlNode node)` / `DeserializeNode(...)`**
  - 用途：从 XML 节点（形如 `<Item id="sword" slot="Weapon0"/>`）逐子节点重建槽位；旧槽位名通过 `GetEquipmentIndexFromOldEquipmentIndexName` 映射到新 `EquipmentIndex`。
  - 副作用：写入自身槽位；放不进目标槽的物品会触发 `Debug.FailedAssert` 并跳过。
  - 调用时机：角色模板 / 装备从模块 XML 加载时由 object 系统调用。

### 槽位访问与组合

- **`this[int index]` / `this[EquipmentIndex index]`**（索引器）
  - 用途：读取或设置某个槽位；设置时先调用 `IsItemFitsToSlot((EquipmentIndex)index, value.Item)` 校验，再写入固定长度的内部数组。
  - 副作用：非法物品写入会触发断言；越界 `index` 会抛 `IndexOutOfRangeException`。
  - 调用时机：任何按槽位读写装备的代码，包括 `FillFrom`、`Clone`、生成路径与界面。

- **`Horse`**（属性，返回 `EquipmentElement`）
  - 用途：便捷读取马匹槽（内部索引 10）的 `EquipmentElement`。
  - 副作用：无；不要把返回的元素当成库存中的马匹数量。
  - 调用时机：需要马匹外观 / 属性时，如 `MainHeroSaveVisualSupplier` 读取 `mainHero.BattleEquipment[(EquipmentIndex)10]`。

- **`GetEquipmentFromSlot(EquipmentIndex equipmentIndex)`**
  - 用途：等价于索引器 getter，返回指定槽的 `EquipmentElement`。
  - 副作用：无。
  - 调用时机：`GetRandomizedEquipment` 内部、`GetWeaponPickUpSlotIndex` 等读取槽位处。

- **`AddEquipmentToSlotWithoutAgent(EquipmentIndex equipmentIndex, EquipmentElement itemRosterElement)`**
  - 用途：在“没有 Mission Agent”的上下文（库存 / 角色编辑界面）下向某槽写入元素，等价于索引器 setter。
  - 副作用：经索引器 setter，仍会触发 `IsItemFitsToSlot` 校验。
  - 调用时机：角色创建 / 装备界面在未生成 Agent 时装配物品。

- **`IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)`**（静态）
  - 用途：判定物品能否放入某槽。`null` 永远合法；`Invalid` / `Book` 永远不合法；武器按 `DropOnWeaponChange | DropOnAnyAction` 标志决定落主手槽还是 `ExtraWeaponSlot`；护甲 / 马匹 / 马具各有固定槽。
  - 副作用：无，纯判定。
  - 调用时机：写入槽位前（索引器 setter、`DeserializeNode`）、从 XML 与拾取逻辑校验时。

- **`GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)`**
  - 用途：为拾取到的武器找一个空武器槽；带丢弃标志的物品强制落到 `ExtraWeaponSlot`，否则从 `WeaponItemBeginSlot` 起到 `ExtraWeaponSlot` 找第一个空槽，找不到返回 `None`。
  - 副作用：无，只是选址。
  - 调用时机：战场中 Agent 拾取武器时决定落哪个槽。

- **`SwapWeapons(Equipment equipment, EquipmentIndex index1, EquipmentIndex index2)`**（静态）
  - 用途：交换同一 `Equipment` 内两个槽位的元素（含临时变量，安全交换）。
  - 副作用：直接修改传入的 `Equipment` 实例。
  - 调用时机：武器排序 / 交换主副手时。

- **`GetInitialWeaponIndicesToEquip(out EquipmentIndex mainHandWeaponIndex, out EquipmentIndex offHandWeaponIndex, out bool isMainHandNotUsableWithOneHand, InitialWeaponEquipPreference initialWeaponEquipPreference = Any)`**
  - 用途：从 5 个武器槽中挑出初始主手 / 副手索引，并标记主手是否双手不可用；`InitialWeaponEquipPreference` 可偏好近战或远程主手。
  - 副作用：仅通过 `out` 回写，不改动装备。
  - 调用时机：Agent 装备到手时决定初始持握的武器。

### 派生查询与汇总

- **`IsEmpty()`**
  - 用途：所有槽位的 `Item` 均为 `null` 时返回 `true`。
  - 副作用：无。
  - 调用时机：判断装备是否为空、生成前是否跳过随机拼装。

- **`GetTotalWeightOfWeapons()` / `GetTotalWeightOfArmor(bool forHuman)`**
  - 用途：分别累加武器槽（0–4）或护甲槽（人形 / 马匹范围）中非空元素的 `GetEquipmentElementWeight()`。
  - 副作用：无。
  - 调用时机：负重 / 速度计算、Agent 生成参数。

- **`GetHeadArmorSum()` / `GetHumanBodyArmorSum()` / `GetLegArmorSum()` / `GetArmArmorSum()` / `GetHorseArmorSum()`**
  - 用途：按部位累加 `GetModifiedHeadArmor` / `GetModifiedBodyArmor` / `GetModifiedLegArmor` / `GetModifiedArmArmor` / `GetModifiedMountBodyArmor`，已含 `ItemModifier` 影响。
  - 副作用：无。
  - 调用时机：护甲面板与战斗伤害结算读取，不能直接用 `ItemObject` 基础护甲替代。

- **`HasWeapon()` / `HasWeaponOfClass(WeaponClass weaponClass)`**
  - 用途：判断武器槽中是否存在任意武器 / 指定 `WeaponClass` 的武器。
  - 副作用：无。
  - 调用时机：战斗准备、AI 选型。

- **`GetUnderwearType(bool isFemale)`**
  - 用途：依据 `Body` 槽决定内衣类型（`FullUnderwear` / `OnlyTop` / `NoUnderwear`）。
  - 副作用：无。
  - 调用时机：角色外观 / 换装系统。

- **`HairCoverType` / `BeardCoverType` / `ManeCoverType` / `ReinsMeshName` / `BodyMeshType` / `BodyDeformType`**（属性）
  - 用途：从护甲 / 马具槽的 `ArmorComponent` 派生出外观与遮罩信息（头发、胡须、鬃毛、缰绳网格、体型网格与变形）。
  - 副作用：无。
  - 调用时机：角色视觉构建、`CharacterTableau` 等预览。

- **`ItemEquipmentType` / `IsBattle` / `IsCivilian` / `IsStealth`**（属性）
  - 用途：读取装备语义；`ItemEquipmentType` 返回底层 `EquipmentType`，其余三个是对应语义的布尔快捷判断。
  - 副作用：无。
  - 调用时机：按类型分流（战斗 / 平民 / 潜行）的逻辑。

### 装备码与随机拼装

- **`CalculateEquipmentCode()`**
  - 用途：把 12 个槽序列化成一个字符串，每槽格式为 `+<index>-<itemStringId>-<modifierStringId>`，空物品 / 空修饰用 `@null`。
  - 副作用：无，纯序列化；空 `Item` 会回退为 `@null` 而非崩溃。
  - 调用时机：`CharacterData` 存档时 `hero.BattleEquipment.CalculateEquipmentCode()`，以及各角色 / 装备 VM 生成预览码。

- **`CreateFromEquipmentCode(string equipmentCode)`**（静态）
  - 用途：从 `CalculateEquipmentCode` 产出的字符串反向重建 `Equipment`；按 `+` 分段、按 `-` 拆 index / 物品 / 修饰，经 `MBObjectManager` 解析 `ItemObject` 与 `ItemModifier`。
  - 副作用：无；找不到的物品 / 修饰按 `@null` 跳过该槽。
  - 调用时机：读档时 `Equipment.CreateFromEquipmentCode(characterData.BattleEquipmentCode)`，以及 `CharacterCode`、外观预览重建。

- **`GetRandomEquipmentElements(BasicCharacterObject character, bool randomEquipmentModifier, EquipmentType equipmentType, int seed = -1)`**（静态）
  - 用途：从角色模板的 Battle / Civilian 装备集合中随机取样，拼出一套该类型的 `Equipment`；`seed >= 0` 时使用确定性随机，`randomEquipmentModifier` 时附带随机 `ItemModifier`。
  - 副作用：仅构造并返回新 `Equipment`；列表为空时返回空装备（不报错）。
  - 调用时机：`SpawningBehaviorBase` 在生成战场单位时调用 `Equipment.GetRandomEquipmentElements(troopCharacter, !GameNetwork.IsMultiplayer, Equipment.EquipmentType.Battle, agentBuildData.AgentEquipmentSeed)`。

- **`IsEquipmentEqualTo(Equipment other)`**
  - 用途：逐槽 `IsEqualTo` 比较并核对 `EquipmentType`，完全相等才返回 `true`。
  - 副作用：无。
  - 调用时机：存档前后 / 装备变更检测。

## 示例

把英雄当前战斗装备序列化进存档用的 `CharacterData`，并在读档时从装备码重建：

```csharp
// 存档：把英雄当前战斗装备编码为字符串，交给 CharacterData 持久化
string battleCode = Hero.MainHero.BattleEquipment.CalculateEquipmentCode();
characterData.BattleEquipmentCode = battleCode;

// 读档：从装备码重建独立的 Equipment 实例
Equipment restored = Equipment.CreateFromEquipmentCode(characterData.BattleEquipmentCode);
bool identical = restored.IsEquipmentEqualTo(Hero.MainHero.BattleEquipment);
```

生成战场单位前，从角色模板随机拼装战斗装备，并在写入某个武器槽前校验槽位合法性：

```csharp
// 拼装一套确定性随机的战斗装备，作为 Agent 的生成输入
Equipment spawnEq = Equipment.GetRandomEquipmentElements(
    troopCharacter,
    randomEquipmentModifier: !GameNetwork.IsMultiplayer,
    Equipment.EquipmentType.Battle,
    agentBuildData.AgentEquipmentSeed);

// 写回武器槽前先确认物品与槽位匹配，避免触发 IsItemFitsToSlot 断言
ItemObject bow = MBObjectManager.Instance.GetObject<ItemObject>("bow");
if (bow != null && Equipment.IsItemFitsToSlot(EquipmentIndex.Weapon2, bow))
{
    spawnEq[EquipmentIndex.Weapon2] = new EquipmentElement(bow);
}
```

## 参见

- ↑ 父级：[Core-extra API 索引](../)
- ↔ 相关：[EquipmentElement](../EquipmentElement) · [ItemObject](../ItemObject) · [ItemModifier](../ItemModifier) · [EquipmentIndex](../EquipmentIndex) · [EquipmentType](../EquipmentType) · [MBEquipmentRoster](../MBEquipmentRoster) · [BasicCharacterObject](../BasicCharacterObject) · [CharacterCode](../CharacterCode) · [Hero](../../campaign/Hero) · [CharacterObject](../../campaign/CharacterObject) · [ItemRoster](../../campaign/ItemRoster) · [Agent](../../mission/Agent) · [Mission](../../mission/Mission) · [GiveItemAction](../../campaign-ext/GiveItemAction) · [SellItemsAction](../../campaign-ext/SellItemsAction)

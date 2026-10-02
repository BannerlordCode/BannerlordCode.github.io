---
title: "Equipment"
description: "Bannerlord 中一个角色“穿在身上”的完整装备集合：12 个武器/护甲/坐骑槽位，以及由此派生出的护甲值、重量、外观覆盖类型与装备码。战役与战斗场景都通过它读写穿戴状态。"
---

# Equipment

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** `public class Equipment`  
**Base:** 无（不继承任何基类）  
**File:** `TaleWorlds.Core/Equipment.cs`

## 概述

`Equipment` 表示**一个角色某一时刻穿戴的全部物品**：主手、副手、备用武器、头盔、身甲、腿甲、手套、披风、坐骑、马具，共固定 12 个槽位（`EquipmentSlotLength = 12`）。每个槽位存放的是一个 `EquipmentElement`（物品 + 可选改造词条 + 装饰品 + 任务标记）。它自身还记录了“这是战斗装 / 平民装 / 潜行装”的类别，并据此派生出护甲合计、总重量、头发/胡须覆盖范围、身体网格类型等数据。

`Equipment` 是引用类型、可变对象，且直接被存档系统序列化：战役里的 `Hero` 持有的 `BattleEquipment` / `CivilianEquipment` / `StealthEquipment` 就是三个 `Equipment` 实例，改动会持久化进存档。它既出现在战役层（`CharacterObject` 的装备模板、`MBEquipmentRoster` 名册），也出现在战斗层（生成 `Agent` 前的穿戴快照）。

## 心智模型

把 `Equipment` 想成**“一张 12 格的穿戴清单”**，而不是某种服务或流程：

- **它是什么**：一个长度为 12 的 `EquipmentElement[]`，用 `EquipmentIndex` 枚举寻址（0–4 是武器槽，5–9 是护甲槽，10 是坐骑，11 是马具）。类别字段决定它是 Battle / Civilian / Stealth 三套之一。
- **生命周期**：通常由 `Hero`、`CharacterObject`、`MBEquipmentRoster` 或装备选择模型创建并持有；你一般**不要** `new Equipment()` 后长期自己保管——要么从 `Hero` / `CharacterObject` 取现有实例，要么 `Clone()` 一份临时副本。
- **所在层**：属于 `TaleWorlds.Core`，是战役与战斗共享的基础数据结构，横跨 `Campaign` 与 `Mission` 两层。
- **何时用**：需要读取或改写某角色“现在穿了什么”时——给英雄换装、从战利品里抽物品、根据装备算护甲/重量、把装备序列化成码在网络/存档中传递。
- **何时不要用**：
  - 想“安全地给英雄整套换装”请走 `EquipmentHelper.AssignHeroEquipmentFromEquipment(hero, equipment)`，它会按类别自动写入 Battle/Civilian/Stealth 对应槽，**不要**手写 12 次槽位赋值。
  - 想改的是物品栏库存而不是穿戴状态，请用 `ItemRoster` / `ItemRosterElement`，不是 `EquipmentElement`。
  - 想基于概率/文化随机配装，请用 `EquipmentSelectionModel`（见 [战役模块](../../campaign/)）或 `Equipment.GetRandomEquipmentElements`，不要手工拼。
- **依赖**：槽位里的物品来自 `MBObjectManager` 注册的 `ItemObject`；外观覆盖类型来自 `ItemObject.ArmorComponent`；脸型生成依赖 `BodyProperties.GetBodyProperties(Equipment)`。
- **出错会怎样**：设置槽位时会做 `IsItemFitsToSlot` 校验，放错类型只会 `Debug.FailedAssert`（不抛异常但污染日志与表现）；`CreateFromEquipmentCode` / `Deserialize` 依赖 `MBObjectManager.Instance`，若在对象系统就绪前调用会拿到 `null` 进而崩溃；直接改 `Hero.BattleEquipment` 会写进存档。

## 如何获取 / 构造 Equipment

```csharp
// 1) 从战役英雄读取（最常用路径）
Equipment battleEq   = Hero.MainHero.BattleEquipment;     // 战斗装
Equipment civilianEq = Hero.MainHero.CivilianEquipment;   // 平民装
Equipment stealthEq  = Hero.MainHero.StealthEquipment;    // 潜行装

// 2) 从角色模板读取装备集（troop / 文化默认）
foreach (Equipment eq in someCharacter.BattleEquipments)
{
    // 遍历该角色所有可能的战斗装备方案
}

// 3) 从装备名册读取（文化/部队默认）
MBEquipmentRoster roster = MBEquipmentRosterExtensions.All
    .Find(x => x.StringId == "generic_bat_dummy");
Equipment firstBattle = roster.GetBattleEquipments().First();

// 4) 用装备码构造（空码得到 12 个空槽的装备；带参则还原物品）
Equipment fromCode    = Equipment.CreateFromEquipmentCode("");
// 深拷贝已有实例（最稳妥的“新建”方式，避免直接 new 后类别错配）
Equipment copied      = Hero.MainHero.BattleEquipment.Clone();
Equipment fromCode    = Equipment.CreateFromEquipmentCode(             // 从字符串码还原
    "0-iron_sword-@null+5-northern_helmet-@null");
Equipment random      = Equipment.GetRandomEquipmentElements(          // 按模板+类别随机
    someCharacter, randomEquipmentModifier: false, Equipment.EquipmentType.Civilian);
```

## 主要属性

### 类别与身份

| 属性 | 类型 | 说明 | 副作用 / 注意 |
|------|------|------|--------------|
| `ItemEquipmentType` | `EquipmentType` | 返回内部类别（Battle / Civilian / Stealth / Invalid）。 | 只读；构造时设定。 |
| `IsBattle` | `bool` | 是否为战斗装。 | — |
| `IsCivilian` | `bool` | 是否为平民装。 | — |
| `IsStealth` | `bool` | 是否为潜行装。 | — |

### 槽位访问

| 属性 / 索引器 | 类型 | 说明 | 副作用 / 注意 |
|------|------|------|--------------|
| `this[EquipmentIndex index]` | `EquipmentElement` | 按枚举读写槽位（如 `Weapon0`、`Head`、`Body`、`Horse`、`HorseHarness`）。 | **写操作会调用 `IsItemFitsToSlot` 做类型校验**；放错类型触发 `Debug.FailedAssert`，但不会阻止赋值。 |
| `this[int index]` | `EquipmentElement` | 按 0–11 整数读写。 | 越界（>11）抛 `IndexOutOfRangeException`；优先用 `EquipmentIndex` 枚举。 |
| `Horse` | `EquipmentElement` | 等价于 `_itemSlots[10]`，即坐骑槽。 | 只读快捷方式。 |

### 外观 / 体型派生（来自 `ItemObject.ArmorComponent`）

这些只读属性根据头盔、身甲、马具的 `ArmorComponent` 计算，主要供 `BodyProperties` 脸型生成与渲染使用：

| 属性 | 类型 | 说明 |
|------|------|------|
| `HairCoverType` | `ArmorComponent.HairCoverTypes` | 头盔/身甲对头发的覆盖范围；若身甲为空则视为 `Type4`。 |
| `BeardCoverType` | `ArmorComponent.BeardCoverTypes` | 对胡须的覆盖范围。 |
| `ManeCoverType` | `ArmorComponent.HorseHarnessCoverTypes` | 马具对马鬃的覆盖。 |
| `ReinsMeshName` | `string` | 马具缰绳网格名。 |
| `EarsAreHidden` | `bool` | 由 `HairCoverType` 推导。 |
| `MouthIsHidden` | `bool` | 由 `BeardCoverType == All` 推导。 |
| `BodyMeshType` | `ArmorComponent.BodyMeshTypes` | 身甲决定的身体网格类型。 |
| `BodyDeformType` | `ArmorComponent.BodyDeformTypes` | 身甲决定的体型变形。 |

## 主要方法

### 构造与复制

#### `public Equipment()`
创建类别为 `Invalid` 的空装备（12 个空槽）。一般用于反序列化或作为临时容器。

#### `public Equipment(EquipmentType equipmentType)`
指定类别（Battle / Civilian / Stealth）创建空装备。**当你要新建一套“属于某类别”的装备时用它**，而不是无参构造。

#### `public Equipment(Equipment equipment)`
从已有实例深拷贝（逐槽 `new EquipmentElement`）。仅复制物品与改造词条，不复制 `SyncEquipments` 等运行时标志。

#### `public Equipment Clone(bool cloneWithoutWeapons = false)`
返回一份新 `Equipment`。`cloneWithoutWeapons: true` 时前 5 个武器槽置为 `EquipmentElement.Invalid`，只保留护甲/坐骑——适合做“脱战换装”前的基底。
**何时调用**：需要临时修改又不污染原装备/存档时（例如战斗生成前的穿戴快照、潜行预览）。

```csharp
Equipment baseCivilian = Hero.MainHero.CivilianEquipment.Clone(cloneWithoutWeapons: true);
baseCivilian[EquipmentIndex.Body] = new EquipmentElement(cleanTunic);
```

#### `public void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)`
用 `source` 的 12 个槽覆盖自身；`useSourceEquipmentType: true` 时连类别也一并复制。**副作用**：直接改写自身所有槽位，会反映在持有它的 `Hero` 上（若自身就是 `Hero.BattleEquipment`）。
**何时调用**：需要把整套装备搬进已有实例（如 `MBEquipmentRoster.InitializeDefaultEquipment` 内部）时。

### 槽位读写

#### `public void AddEquipmentToSlotWithoutAgent(EquipmentIndex equipmentIndex, EquipmentElement itemRosterElement)`
等价于 `this[equipmentIndex] = itemRosterElement`，即写入某个槽；命名强调“不经过 Agent（战斗实体）直接改数据”。**写操作同样经过 `IsItemFitsToSlot` 校验。**

#### `public EquipmentElement GetEquipmentFromSlot(EquipmentIndex equipmentIndex)`
返回该槽的 `EquipmentElement`（空槽返回 `Item == null` 的元素）。读取不会触发校验。

#### `public static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)`
静态方法：判断 `item` 能否放进 `slotIndex`（按 `ItemType` 映射）。`item == null` 永远返回 `true`；书、无效物品返回 `false`。**何时调用**：在批量写入前预判，避免触发 `Debug.FailedAssert`。注意它只是断言、不抛异常。

#### `public EquipmentIndex GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)`
为一个拾取武器找空武器槽：带 `DropOnWeaponChange`/`DropOnAnyAction` 标志的归到 `ExtraWeaponSlot`，否则返回第一个空武器槽（`Weapon0`–`Weapon3`），无空位返回 `EquipmentIndex.None`。战斗拾取逻辑用它决定落点。

#### `public static void SwapWeapons(Equipment equipment, EquipmentIndex index1, EquipmentIndex index2)`
静态交换两个槽位的内容（值交换，不涉及 Agent）。换武器动画/快捷换装底层用它。

### 查询与统计

#### `public bool IsEmpty()`
所有 12 槽 `Item` 均为 `null` 时返回 `true`。英雄成年初始化时会用它判断是否需要重新配装。

#### `public bool HasWeapon()`
前 5 个武器槽中是否存在“带 `WeaponMask` 标志”的武器。

#### `public bool HasWeaponOfClass(WeaponClass weaponClass)`
是否存在指定武器类的武器（如 `WeaponClass.OneHanded`）。

#### `public float GetTotalWeightOfArmor(bool forHuman)` 与 `public float GetTotalWeightOfWeapons()`
分别累加护甲（人/马）与武器的重量，内部调用 `EquipmentElement.GetEquipmentElementWeight()`。负重、移动速度模型会用到。

#### `GetHeadArmorSum` / `GetHumanBodyArmorSum` / `GetLegArmorSum` / `GetArmArmorSum` / `GetHorseArmorSum`
各部位护甲值合计，基于 `EquipmentElement.GetModified*Armor()`（已含 `ItemModifier` 加成）。战斗伤害结算与装备评级依赖这些数值。

#### `public UnderwearTypes GetUnderwearType(bool isFemale)`
根据身甲是否存在、是否为女性且 `DoesNotHideChest`，返回 `NoUnderwear` / `FullUnderwear` / `OnlyTop`，决定角色内衣渲染。

#### `public bool IsEquipmentEqualTo(Equipment other)`
逐槽比较 `EquipmentElement.IsEqualTo`，并比较三类标志。用于判断英雄装备是否“还和模板一致”以决定要不要重配。

### 装备码（序列化 / 网络辅助）

#### `public string CalculateEquipmentCode()`
把 12 槽编码成 `"槽位-物品StringId-改造StringId"` 用 `+` 连接的字符串（空物品用 `@null`）。用于存档/网络同步时描述穿戴。
**示例**：`0-iron_sword-@null+5-northern_helmet-@null+10-horse-@null`。

#### `public static Equipment CreateFromEquipmentCode(string equipmentCode)`
`CalculateEquipmentCode` 的逆操作：解析字符串并通过 `MBObjectManager.Instance.GetObject<ItemObject>` / `GetObject<ItemModifier>` 还原物品。**依赖 `MBObjectManager` 已初始化**；在对象系统就绪前调用会拿到 `null` 物品。

#### `public void Deserialize(MBObjectManager objectManager, XmlNode node)` / `DeserializeNode(...)`
从 XML 节点还原装备（troop 模板、存档加载用）。`DeserializeNode` 内部同样走 `IsItemFitsToSlot`，不匹配会 `Debug.FailedAssert`。

#### `public static EquipmentIndex GetEquipmentIndexFromOldEquipmentIndexName(string oldEquipmentIndexName)`
把旧 XML 槽位名（`Item0`–`Item4`）映射到新枚举（`Weapon0`–`ExtraWeaponSlot`），兼容旧版装备定义。

### 武器初始配置与随机

#### `public void GetInitialWeaponIndicesToEquip(out EquipmentIndex mainHandWeaponIndex, out EquipmentIndex offHandWeaponIndex, out bool isMainHandNotUsableWithOneHand, InitialWeaponEquipPreference initialWeaponEquipPreference = InitialWeaponEquipPreference.Any)`
根据 `InitialWeaponEquipPreference`（任意 / 主手近战 / 主手远程）从 5 个武器槽挑出主手与副手槽位，并标记主手是否无法单手使用。进入战斗时 `Agent` 初始持武器逻辑依赖它。

#### `public static Equipment GetRandomEquipmentElements(BasicCharacterObject character, bool randomEquipmentModifier, EquipmentType equipmentType, int seed = -1)`
从 `character` 的对应类别装备集中随机拼出一套装备（可选 `seed` 固定随机、`randomEquipmentModifier` 决定是否随机附加改造词条）。`EquipmentSelectionModel` 内部用它给 troop/英雄随机配装。

## 典型用法示例

### 示例 1：读取并临时修改玩家英雄的战斗装备

直接改 `Hero.BattleEquipment` 会写进存档，因此这里用 `Clone()` 拿副本做演示；若要真正持久换装，请用 `EquipmentHelper.AssignHeroEquipmentFromEquipment`。

```csharp
// 玩家英雄的战斗装备（真实获取路径：Hero.MainHero）
Equipment battleEq = Hero.MainHero.BattleEquipment;

// 通过 MBObjectManager 拿出物品后再写入槽位（索引器会校验类型）
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("iron_sword_a");
if (Equipment.IsItemFitsToSlot(EquipmentIndex.Weapon0, sword))
{
    battleEq[EquipmentIndex.Weapon0] = new EquipmentElement(sword);
}

// 临时副本：去掉武器，用于战斗生成前的平民快照
Equipment preview = Hero.MainHero.CivilianEquipment.Clone(cloneWithoutWeapons: true);
EquipmentElement helm = preview.GetEquipmentFromSlot(EquipmentIndex.Head);
if (!helm.IsEmpty)
{
    // helm.Item 是 ItemObject，可读其护甲/价值
    float headArmor = preview.GetHeadArmorSum();
}
```

### 示例 2：从敌方角色模板抽取战利品

`CharacterObject.BattleEquipments` 返回该角色所有战斗装备方案；战利品模型（`DefaultBattleRewardModel.GetLootedItemFromTroop`）正是这样工作的。

```csharp
// 真实获取路径：CharacterObject 的战斗装备集
CharacterObject enemy = someCombatant.Character; // 例如战斗中的敌方单位模板
Equipment randomBattle = enemy.BattleEquipments.GetRandomElementInefficiently();

// 抽取主手槽的物品作为战利品
EquipmentElement loot = randomBattle.GetEquipmentFromSlot(EquipmentIndex.Weapon0);
if (!loot.IsEmpty && loot.Item != null && !loot.Item.NotMerchandise)
{
    ItemObject dropped = loot.Item;        // 真实 ItemObject
    int value = loot.GetBaseValue();        // 含改造词条后的价值
}
```

### 示例 3：用装备码做存档/网络同步

```csharp
// 序列化当前穿戴
string code = Hero.MainHero.BattleEquipment.CalculateEquipmentCode();

// 在另一处（确保 MBObjectManager 已就绪）还原
Equipment restored = Equipment.CreateFromEquipmentCode(code);
```

## 依赖与关联

### 上游（谁创建 / 持有 Equipment）
- [Hero](../../campaign/Hero/) — `BattleEquipment` / `CivilianEquipment` / `StealthEquipment` 三个 `Equipment` 实例，随英雄存档。
- [CharacterObject](../../campaign/CharacterObject/) — `BattleEquipments` / `CivilianEquipments` / `StealthEquipments` 提供模板装备集。
- [MBEquipmentRoster](../MBEquipmentRoster/) — 文化/部队默认装备名册，内部为 `MBList<Equipment>`。

### 下游（消费 Equipment 的子系统）
- [EquipmentElement](../EquipmentElement/) — 12 个槽位中存放的实际物品单元（`Item` + `ItemModifier` + `CosmeticItem` + `IsQuestItem`）。
- [ItemObject](../ItemObject/) — 槽位里 `EquipmentElement.Item` 指向的真实物品，提供 `ArmorComponent` / `WeaponComponent`。
- [BodyProperties](../BodyProperties/) — `BasicCharacterObject.GetBodyProperties(Equipment)` 用 `HairCoverType` / `BeardCoverType` 决定脸型生成。
- [战役模块](../../campaign/) — 装备选择模型 `EquipmentSelectionModel` 通过 `GetRandomEquipmentElements` 给英雄/troop 配装。

### 存档点
- [存档系统](../../save-system/) — `Equipment` 的槽位数组带 `[SaveableField]`、`EquipmentElement` 的 `Item` / `ItemModifier` 带 `[SaveableProperty]`，随持有它的 `Hero` / roster 一起序列化；对象引用通过 `MBObjectManager` 的 `MBGUID` 解析。

## 风险段（崩溃 / 坏档 / 表现错误）

1. **对象系统未就绪就还原**：`CreateFromEquipmentCode`、`Deserialize`、`DeserializeNode` 都调用 `MBObjectManager.Instance.GetObject(...)`。若在 `MBObjectManager` 加载游戏对象之前（例如 `MBSubModuleBase` 的 `OnSubModuleLoad` 早期、或任何 `Game` 尚未启动处）调用，取到 `null` 后继续访问 `.Name` / 构造 `EquipmentElement` 会抛 `NullReferenceException`。**必须在战役/战斗已加载后调用。**
2. **直接改 `Hero.BattleEquipment` 会写进存档**：`Hero.BattleEquipment` 返回的是**同一个可变实例**。在战斗生成、预览、临时计算里直接写它，会污染英雄的持久装备甚至坏档。需要临时穿戴时务必先 `Clone()`；要正式整套换装请走 `EquipmentHelper.AssignHeroEquipmentFromEquipment`。
3. **槽位类型校验只是断言**：索引器 setter 调用 `IsItemFitsToSlot`，放错类型（如把武器塞进头盔槽）只触发 `Debug.FailedAssert`，**不会阻止赋值**，但会导致渲染/护甲计算异常。批量写入前用 `IsItemFitsToSlot` 预判。
4. **整数下标越界**：`_itemSlots` 长度固定为 12。用 `this[int]` 且下标 >11 会抛 `IndexOutOfRangeException`。优先使用 `EquipmentIndex` 枚举（`Horse = 10`、`HorseHarness = 11` 是上限）。
5. **存档/序列化期间修改**：在存档读写回调或 `MBObjectManager` 收集可序列化对象（`AutoGeneratedInstanceCollectObjects`）的过程中并发改 `Equipment` 会导致收集到的对象图不一致。改装备应在战役 tick / 行为 / 对话逻辑中完成，而非存档临界区。

## 跨版本提示

- v1.3.15 / v1.3.0：公开 API 与 1.4.5 基本一致——同样是 12 槽 `EquipmentElement[]`、同样的 `EquipmentIndex` 映射与 `Clone` / `FillFrom` / `CalculateEquipmentCode` 等签名。本文以 1.4.5 权威源码为准。
- v1.4.5：索引器写操作已显式调用 `IsItemFitsToSlot` 做断言；早期反编译版本表现相同。跨版本 mod 读取装备代码（`CalculateEquipmentCode` / `CreateFromEquipmentCode`）可放心复用。
- `Equipment` 无基类，也不实现任何接口；它与 `Hero`、`CharacterObject` 的耦合是**组合**而非继承。

## 参见

- [EquipmentElement](../EquipmentElement/) — 单槽物品单元（Item + 改造 + 装饰）
- [EquipmentIndex](../EquipmentIndex/) — 12 个槽位的枚举映射
- [MBEquipmentRoster](../MBEquipmentRoster/) — 装备名册（一组 Equipment）
- [ItemObject](../ItemObject/) — 槽位中的真实物品
- [ItemModifier](../ItemModifier/) — 改造词条
- [BodyProperties](../BodyProperties/) — 依赖装备外观覆盖的脸型生成
- [Hero](../../campaign/Hero/) — 持有 Battle/Civilian/Stealth 三套 Equipment
- [CharacterObject](../../campaign/CharacterObject/) — 提供 Battle/Civilian 装备模板集
- [存档系统](../../save-system/) — Equipment 随 Hero 一起序列化的机制

## 导航

- ↑ 父级：[核心扩展模块索引](../../core-extra/)
- ↔ 同级：[EquipmentElement](../EquipmentElement/) · [MBEquipmentRoster](../MBEquipmentRoster/) · [ItemObject](../ItemObject/) · [EquipmentIndex](../EquipmentIndex/) · [ItemRosterElement](../ItemRosterElement/) · [BodyProperties](../BodyProperties/)
- 相关类型：[Hero](../../campaign/Hero/) · [CharacterObject](../../campaign/CharacterObject/) · [战役模块](../../campaign/)

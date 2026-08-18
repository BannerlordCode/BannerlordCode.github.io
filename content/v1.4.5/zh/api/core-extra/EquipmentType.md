---
title: "EquipmentType"
description: "嵌套于 Equipment 的静态枚举，用于标记一套装备的使用场景（战斗 / 平民 / 潜行 / 无效），决定其适配的装备花名册与物品标记，被角色护甲计算、装备筛选与花名册生成在运行时读取。"
---

# EquipmentType

**命名空间：** TaleWorlds.Core
**模块：** TaleWorlds.Core
**类型：** `public enum Equipment.EquipmentType`（嵌套于 `Equipment` 类内）
**源文件：** Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/Equipment.cs（枚举内联定义于 `Equipment` 类内）

## 概述

`EquipmentType` 是 `TaleWorlds.Core` 命名空间下、定义于 `Equipment` 类内部的公开枚举（`public enum Equipment.EquipmentType`）。它用一个枚举值标出一份 `Equipment` 装备集的“使用场景”：`Invalid`（未初始化）、`Battle`（战斗）、`Civilian`（平民）、`Stealth`（潜行）。

游戏在以下场景都会读取这个类型来决定走哪条分支、用哪份预设花名册、匹配哪些物品标记：

- 生成角色随机装备：`Equipment.GetRandomEquipmentElements(character, randomEquipmentModifier, equipmentType, seed)` 内部用 `switch` 在 `BattleEquipments` 与 `CivilianEquipments` 两套花名册间择一。
- 为要人 / 英雄挑选合适套装：`DefaultEquipmentSelectionModel` 与各类战役行为（`AgingCampaignBehavior`、`CompanionRolesCampaignBehavior`、`NPCEquipmentsCampaignBehavior` 等）都以 `Equipment.EquipmentType.Civilian` / `Battle` 作为入参来索取对应用途的装备。
- 按场景计算护甲总和：`CharacterObject.GetHeadArmorSum` / `GetBodyArmorSum` / `GetLegArmorSum` 等方法把装备类型作为可选参数（默认 `Battle`）。

它本质上是贴在 `Equipment` 上的“分类标签”，而非独立可保存的数据对象。

## 心智模型

`EquipmentType` 是嵌套在 `Equipment` 类里的静态枚举，本身不是可序列化的数据对象，而是一个“分类标签”：每一份 `Equipment` 实例在构造时通过 `new Equipment(EquipmentType.Battle)` 之类的方式被赋予一个类型，并把它存进标记了 `[SaveableField]` 的字段 `_equipmentType`，从而决定这套装备是在战斗、城镇还是潜行场景下使用。它和 `ItemObject` 上的 `IsCivilian` / `IsStealthItem` 等标记相呼应——一个战斗套装应当容纳“非平民、非潜行”的战斗物件，平民套装对应带 `Civilian` 标记的物品，潜行套装对应带 `Stealth` 标记的物品。不要把枚举本身当作持久世界状态去持有：枚举值只是常量标签，真正随存档变化的是 `Equipment` 上持有的那个具体取值。需要判断某套装备属于哪类时，读 `Equipment.ItemEquipmentType` 或 `IsBattle` / `IsCivilian` / `IsStealth` 属性；不要自己 `new` 一个“枚举变量”去当状态缓存，也不要把 `Invalid` 当成可用的正常类型去填写槽位。

## 何时使用 / 何时不要使用

- **使用**：当你需要创建或区分不同用途的装备套装（战斗 / 平民 / 潜行）时；在生成、筛选、读取装备时按类型做分支；把类型作为 `CharacterObject.GetHeadArmorSum(EquipmentType)` 之类的场景参数传入；在新战役 / 行为里用 `new Equipment(Equipment.EquipmentType.X)` 构造对应用途的空装备。
- **不要使用**：不要把枚举值本身序列化或当作世界状态——它只是常量，随存档恢复的只是 `Equipment` 持有的具体取值。不要拿 `Invalid` 去填充或当作有效装备类型参与筛选与匹配。不要在 `Mission` 战斗层误以为它能直接决定单件物品的槽位（决定槽位的是 `EquipmentIndex`，决定单件物品是否战斗 / 潜行适配的是物品自身的标记）。不要把“装备类型”和“物品标记”画等号去直接比较（见风险）。

## 依赖图

上游类型与系统：

- [ItemObject](../../core/ItemObject) —— 物品携带 `IsCivilian` / `IsStealthItem` 等标记，与装备类型的语义相呼应：平民套装匹配 `Civilian` 物品、潜行套装匹配 `Stealth` 物品，战斗物品则以“非平民且非潜行”来界定。
- [EquipmentIndex](../EquipmentIndex) —— 装备槽位索引枚举；装备类型决定“整套的用途”，而 `EquipmentIndex` 决定“单件物品落在哪个槽位”，二者配合刻画一套完整装备。

下游与协同系统：

- [Equipment](../Equipment) —— 持有 `_equipmentType` 字段并以 `ItemEquipmentType` 属性与 `IsBattle` / `IsCivilian` / `IsStealth` 便捷布尔对外暴露当前类型；构造函数 `new Equipment(EquipmentType)` 即接收本枚举。
- [EquipmentElement](../EquipmentElement) —— 装备里单个槽位的元素（物品 + 修饰）；`Equipment` 通过本枚举判定整套用途后，再往各 `EquipmentElement` 槽位填充对应物品。
- [MBEquipmentRoster](../MBEquipmentRoster) —— `AddEquipmentRoster(roster, equipmentType)` 直接以本枚举做分支，按 `IsStealth` / `IsCivilian` / `IsBattle` 把符合条件的 `Equipment` 收进花名册。
- [ItemTypeEnum](../ItemTypeEnum) —— 物品自身的类型枚举；与装备类型处于不同抽象层，但在“物品能否进入某类套装”的判断中常一起被查阅。

## 风险

- **误把 `Invalid` 当有效类型**：`Equipment` 的无参构造函数会把 `_equipmentType` 设为 `Invalid`。用它去筛选、生成或填充槽位会得到空或错误结果；只有显式传入 `Battle` / `Civilian` / `Stealth` 构造出来的装备才代表有效用途。
- **把枚举当成可序列化数据**：枚举值本身是编译期常量，不可变也不可持久化。真正随存档恢复的是 `Equipment` 上持有的具体取值（`_equipmentType` 是 `[SaveableField]`）。若在静态字段里缓存某个 `EquipmentType` 当作跨战役的“当前类型”，重载后会与实际的 `Equipment` 取值脱节。
- **与 `ItemObject` 标记混淆**：装备类型（`Battle` / `Civilian` / `Stealth`）和物品标记（`IsCivilian` / `IsStealthItem`）是两个层面的概念——前者描述“整套装备的用途”，后者描述“单件物品适合的场景”，不能直接画等号。尤其 `ItemObject` 并没有 `IsBattle` 属性：战斗物品是以“非平民且非潜行”来界定的，匹配时务必核对正确来源（`Equipment.IsBattle` vs `ItemObject.IsCivilian` / `IsStealthItem`）。
- **在 `Mission` 层误用**：装备类型属于 Campaign / 装备层概念。在 `Mission` 或战场逻辑里判断单件物品的战斗 / 潜行适配，应看物品自身的标记而非 `EquipmentType`。
- **跨战役重载失效**：`Equipment` 实例随新战役 / 读档重建，把某套装备的 `EquipmentType` 缓存进长生命周期对象，重载后可能指向已销毁旧战役的取值。需要时从 `Equipment.ItemEquipmentType` 现取。

## 成员说明

本枚举共 4 个取值，可分为“无效哨兵”与“使用场景分类”两组。

### 无效哨兵

- **`Invalid = -1`**
  - 含义：未初始化 / 无效的装备集标记。它是显式赋值的哨兵值，而非可用的正常类型。`Equipment` 的默认无参构造函数会把 `_equipmentType` 设为 `Invalid`，代表“空或未赋予用途”的装备。任何筛选、匹配、护甲求和逻辑都应把它视为“不参与”的状态，而不是一种真实场景。

### 使用场景分类

- **`Battle`**
  - 含义：战斗套装。角色在战场 / 野外使用的标准战斗装备。`Equipment.GetRandomEquipmentElements` 在 `switch` 命中 `Battle` 时取 `CharacterObject.BattleEquipments` 花名册；它也是 `CharacterObject.GetHeadArmorSum` 等护甲求和方法的默认参数。对应的便捷判定是 `Equipment.IsBattle`。
- **`Civilian`**
  - 含义：平民套装。角色在城镇 / 定居点中穿着的平民服饰。`GetRandomEquipmentElements` 命中 `Civilian` 时取 `CharacterObject.CivilianEquipments` 花名册；在物品层面倾向于容纳带 `ItemFlags.Civilian` 标记（即 `ItemObject.IsCivilian` 为真）的物品。对应的便捷判定是 `Equipment.IsCivilian`。
- **`Stealth`**
  - 含义：潜行套装。用于潜行场景的装备，在物品层面倾向于容纳带 `ItemFlags.Stealth` 标记（即 `ItemObject.IsStealthItem` 为真）的物品。对应的便捷判定是 `Equipment.IsStealth`。

### 关联成员（`Equipment` 上的便捷判定）

`Equipment` 提供了与枚举直接对应的只读属性，便于在不写 `switch` 的情况下判定用途：

- **`ItemEquipmentType`**（属性，返回 `EquipmentType`）：返回该 `Equipment` 当前持有的枚举取值。
- **`IsBattle`**（属性，`bool`）：等价于 `_equipmentType == EquipmentType.Battle`。
- **`IsCivilian`**（属性，`bool`）：等价于 `_equipmentType == EquipmentType.Civilian`。
- **`IsStealth`**（属性，`bool`）：等价于 `_equipmentType == EquipmentType.Stealth`。

## 示例

按装备类型分别取同一名角色在战斗与平民场景下的头部护甲总和（`Battle` 是默认值，可省略）：

```csharp
// CharacterObject 上以装备类型为参数切换护甲求和的场景口径
float battleHeadArmor   = character.GetHeadArmorSum(Equipment.EquipmentType.Battle);
float civilianHeadArmor = character.GetHeadArmorSum(Equipment.EquipmentType.Civilian);
```

按目标类型把符合条件的 `Equipment` 收进花名册（源自 `MBEquipmentRoster.AddEquipmentRoster` 的真实分支模式）：

```csharp
// 装备类型与 Equipment 自身的 IsX 标记一一对应，据此筛选可纳入的套装
if ((equipmentType == Equipment.EquipmentType.Stealth  && equipment.IsStealth) ||
    (equipmentType == Equipment.EquipmentType.Civilian && equipment.IsCivilian) ||
    (equipmentType == Equipment.EquipmentType.Battle   && equipment.IsBattle))
{
    roster.Add(equipment);
}
```

## 参见

- ↑ 父级：[Core-extra API 索引](../)
- ↔ 相关：[Equipment](../Equipment) · [EquipmentElement](../EquipmentElement) · [MBEquipmentRoster](../MBEquipmentRoster) · [EquipmentIndex](../EquipmentIndex) · [ItemTypeEnum](../ItemTypeEnum) · [EquipmentFlags](../EquipmentFlags) · [EquipmentCategories](../EquipmentCategories) · [ItemObject](../../core/ItemObject)

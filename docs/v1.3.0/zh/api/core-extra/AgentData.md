<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AgentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentData`
**Base:** 无
**File:** `TaleWorlds.Core/AgentData.cs`

## 概述

`AgentData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AgentData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AgentCharacter` | `public BasicCharacterObject AgentCharacter { get; }` |
| `AgentMonster` | `public Monster AgentMonster { get; }` |
| `AgentOwnerParty` | `public IBattleCombatant AgentOwnerParty { get; }` |
| `AgentOverridenEquipment` | `public Equipment AgentOverridenEquipment { get; }` |
| `AgentEquipmentSeed` | `public int AgentEquipmentSeed { get; }` |
| `AgentNoHorses` | `public bool AgentNoHorses { get; }` |
| `AgentMountKey` | `public string AgentMountKey { get; }` |
| `AgentNoWeapons` | `public bool AgentNoWeapons { get; }` |
| `AgentNoArmor` | `public bool AgentNoArmor { get; }` |
| `AgentFixedEquipment` | `public bool AgentFixedEquipment { get; }` |
| `AgentCivilianEquipment` | `public bool AgentCivilianEquipment { get; }` |
| `AgentClothingColor1` | `public uint AgentClothingColor1 { get; }` |
| `AgentClothingColor2` | `public uint AgentClothingColor2 { get; }` |
| `BodyPropertiesOverriden` | `public bool BodyPropertiesOverriden { get; }` |
| `AgentBodyProperties` | `public BodyProperties AgentBodyProperties { get; }` |
| `AgeOverriden` | `public bool AgeOverriden { get; }` |
| `AgentAge` | `public int AgentAge { get; }` |
| `GenderOverriden` | `public bool GenderOverriden { get; }` |
| `AgentIsFemale` | `public bool AgentIsFemale { get; }` |
| `AgentRace` | `public int AgentRace { get; }` |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin { get; }` |

## 主要方法

### Character
`public AgentData Character(BasicCharacterObject characterObject)`

**用途 / Purpose:** 处理 `character` 相关逻辑。

### Monster
`public AgentData Monster(Monster monster)`

**用途 / Purpose:** 处理 `monster` 相关逻辑。

### OwnerParty
`public AgentData OwnerParty(IBattleCombatant owner)`

**用途 / Purpose:** 处理 `owner party` 相关逻辑。

### Equipment
`public AgentData Equipment(Equipment equipment)`

**用途 / Purpose:** 处理 `equipment` 相关逻辑。

### EquipmentSeed
`public AgentData EquipmentSeed(int seed)`

**用途 / Purpose:** 处理 `equipment seed` 相关逻辑。

### NoHorses
`public AgentData NoHorses(bool noHorses)`

**用途 / Purpose:** 处理 `no horses` 相关逻辑。

### NoWeapons
`public AgentData NoWeapons(bool noWeapons)`

**用途 / Purpose:** 处理 `no weapons` 相关逻辑。

### NoArmor
`public AgentData NoArmor(bool noArmor)`

**用途 / Purpose:** 处理 `no armor` 相关逻辑。

### FixedEquipment
`public AgentData FixedEquipment(bool fixedEquipment)`

**用途 / Purpose:** 处理 `fixed equipment` 相关逻辑。

### CivilianEquipment
`public AgentData CivilianEquipment(bool civilianEquipment)`

**用途 / Purpose:** 处理 `civilian equipment` 相关逻辑。

### ClothingColor1
`public AgentData ClothingColor1(uint color)`

**用途 / Purpose:** 处理 `clothing color1` 相关逻辑。

### ClothingColor2
`public AgentData ClothingColor2(uint color)`

**用途 / Purpose:** 处理 `clothing color2` 相关逻辑。

### BodyProperties
`public AgentData BodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 处理 `body properties` 相关逻辑。

### Age
`public AgentData Age(int age)`

**用途 / Purpose:** 处理 `age` 相关逻辑。

### TroopOrigin
`public AgentData TroopOrigin(IAgentOriginBase troopOrigin)`

**用途 / Purpose:** 处理 `troop origin` 相关逻辑。

### IsFemale
`public AgentData IsFemale(bool isFemale)`

**用途 / Purpose:** 处理 `is female` 相关逻辑。

### Race
`public AgentData Race(int race)`

**用途 / Purpose:** 处理 `race` 相关逻辑。

### MountKey
`public AgentData MountKey(string mountKey)`

**用途 / Purpose:** 处理 `mount key` 相关逻辑。

## 使用示例

```csharp
var value = new AgentData();
```

## 参见

- [完整类目录](../catalog)
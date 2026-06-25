---
title: "AgentData"
description: "AgentData 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 调用 Character 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.Character(characterObject);
```

### Monster
`public AgentData Monster(Monster monster)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Monster 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.Monster(monster);
```

### OwnerParty
`public AgentData OwnerParty(IBattleCombatant owner)`

**用途 / Purpose:** **用途 / Purpose:** 调用 OwnerParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.OwnerParty(owner);
```

### Equipment
`public AgentData Equipment(Equipment equipment)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Equipment 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.Equipment(equipment);
```

### EquipmentSeed
`public AgentData EquipmentSeed(int seed)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EquipmentSeed 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.EquipmentSeed(0);
```

### NoHorses
`public AgentData NoHorses(bool noHorses)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NoHorses 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.NoHorses(false);
```

### NoWeapons
`public AgentData NoWeapons(bool noWeapons)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NoWeapons 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.NoWeapons(false);
```

### NoArmor
`public AgentData NoArmor(bool noArmor)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NoArmor 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.NoArmor(false);
```

### FixedEquipment
`public AgentData FixedEquipment(bool fixedEquipment)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FixedEquipment 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.FixedEquipment(false);
```

### CivilianEquipment
`public AgentData CivilianEquipment(bool civilianEquipment)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CivilianEquipment 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.CivilianEquipment(false);
```

### ClothingColor1
`public AgentData ClothingColor1(uint color)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ClothingColor1 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.ClothingColor1(0);
```

### ClothingColor2
`public AgentData ClothingColor2(uint color)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ClothingColor2 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.ClothingColor2(0);
```

### BodyProperties
`public AgentData BodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BodyProperties 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.BodyProperties(bodyProperties);
```

### Age
`public AgentData Age(int age)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Age 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.Age(0);
```

### TroopOrigin
`public AgentData TroopOrigin(IAgentOriginBase troopOrigin)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TroopOrigin 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.TroopOrigin(troopOrigin);
```

### IsFemale
`public AgentData IsFemale(bool isFemale)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 female 状态或条件。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.IsFemale(false);
```

### Race
`public AgentData Race(int race)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Race 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.Race(0);
```

### MountKey
`public AgentData MountKey(string mountKey)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MountKey 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentData 实例
AgentData agentData = ...;
var result = agentData.MountKey("example");
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
AgentData entry = ...;
```

## 参见

- [本区域目录](../)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentData`
**Base:** 无
**File:** `TaleWorlds.Core/AgentData.cs`

## 概述

`AgentData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### Character
```csharp
public AgentData Character(BasicCharacterObject characterObject)
```

### Monster
```csharp
public AgentData Monster(Monster monster)
```

### OwnerParty
```csharp
public AgentData OwnerParty(IBattleCombatant owner)
```

### Equipment
```csharp
public AgentData Equipment(Equipment equipment)
```

### EquipmentSeed
```csharp
public AgentData EquipmentSeed(int seed)
```

### NoHorses
```csharp
public AgentData NoHorses(bool noHorses)
```

### NoWeapons
```csharp
public AgentData NoWeapons(bool noWeapons)
```

### NoArmor
```csharp
public AgentData NoArmor(bool noArmor)
```

### FixedEquipment
```csharp
public AgentData FixedEquipment(bool fixedEquipment)
```

### CivilianEquipment
```csharp
public AgentData CivilianEquipment(bool civilianEquipment)
```

### SetPrepareImmediately
```csharp
public AgentData SetPrepareImmediately()
```

### ClothingColor1
```csharp
public AgentData ClothingColor1(uint color)
```

### ClothingColor2
```csharp
public AgentData ClothingColor2(uint color)
```

### BodyProperties
```csharp
public AgentData BodyProperties(BodyProperties bodyProperties)
```

### Age
```csharp
public AgentData Age(int age)
```

### TroopOrigin
```csharp
public AgentData TroopOrigin(IAgentOriginBase troopOrigin)
```

### IsFemale
```csharp
public AgentData IsFemale(bool isFemale)
```

### Race
```csharp
public AgentData Race(int race)
```

### MountKey
```csharp
public AgentData MountKey(string mountKey)
```

## 使用示例

```csharp
// AgentData (Data) 的典型用法
new AgentData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
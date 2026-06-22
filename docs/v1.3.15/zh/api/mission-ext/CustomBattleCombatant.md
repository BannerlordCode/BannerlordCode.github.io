<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleCombatant`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleCombatant

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CustomBattleCombatant` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Side` | `public BattleSideEnum Side { get; }` |
| `General` | `public BasicCharacterObject General { get; }` |
| `BasicCulture` | `public BasicCultureObject BasicCulture { get; }` |
| `PrimaryColorPair` | `public Tuple<uint, uint> PrimaryColorPair { get; }` |
| `AlternativeColorPair` | `public Tuple<uint, uint> AlternativeColorPair { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `Characters` | `public IEnumerable<BasicCharacterObject> Characters { get; }` |
| `CountOfCharacters` | `public int CountOfCharacters { get; }` |
| `NumberOfAllMembers` | `public int NumberOfAllMembers { get; }` |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers { get; }` |


## 主要方法

### GetTacticsSkillAmount

```csharp
public int GetTacticsSkillAmount()
```

### AddCharacter

```csharp
public void AddCharacter(BasicCharacterObject characterObject, int number)
```

### SetGeneral

```csharp
public void SetGeneral(BasicCharacterObject generalCharacter)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
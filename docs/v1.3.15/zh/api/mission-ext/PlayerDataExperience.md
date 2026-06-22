<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerDataExperience`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerDataExperience

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`PlayerDataExperience` 是 `TaleWorlds.MountAndBlade.Diamond` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Experience` | `public int Experience { get; }` |
| `Level` | `public int Level { get; }` |
| `ExperienceToNextLevel` | `public int ExperienceToNextLevel { get; }` |
| `ExperienceInCurrentLevel` | `public int ExperienceInCurrentLevel { get; }` |


## 主要方法

### CalculateLevelFromExperience

```csharp
public static int CalculateLevelFromExperience(int experience)
```

### CalculateExperienceFromLevel

```csharp
public static int CalculateExperienceFromLevel(int level)
```

### ExperienceRequiredForLevel

```csharp
public static int ExperienceRequiredForLevel(int level)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
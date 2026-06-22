<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PowerLevelComparer`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PowerLevelComparer

**命名空间:** TaleWorlds.Core.ViewModelCollection
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`PowerLevelComparer` 是 `TaleWorlds.Core.ViewModelCollection` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `DefenderBattlePower` | `public double DefenderBattlePower { get; set; }` |
| `DefenderBattlePowerValue` | `public double DefenderBattlePowerValue { get; set; }` |
| `AttackerBattlePower` | `public double AttackerBattlePower { get; set; }` |
| `AttackerBattlePowerValue` | `public double AttackerBattlePowerValue { get; set; }` |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower { get; set; }` |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower { get; set; }` |
| `InitialDefenderBattlePowerValue` | `public double InitialDefenderBattlePowerValue { get; set; }` |
| `InitialAttackerBattlePowerValue` | `public double InitialAttackerBattlePowerValue { get; set; }` |
| `DefenderRelativePower` | `public float DefenderRelativePower { get; set; }` |
| `AttackerRelativePower` | `public float AttackerRelativePower { get; set; }` |
| `DefenderColor` | `public string DefenderColor { get; set; }` |
| `AttackerColor` | `public string AttackerColor { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |


## 主要方法

### SetColors

```csharp
public void SetColors(string defenderColor, string attackerColor)
```

### Update

```csharp
public void Update(double defenderPower, double attackerPower)
```

### Update

```csharp
public void Update(double defenderPower, double attackerPower, double initialDefenderPower, double initialAttackerPower)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
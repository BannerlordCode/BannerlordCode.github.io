<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntUsageSet`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntUsageSet

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`TauntUsageSet` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static TauntUsageManager Instance { get; }` |
| `UsageFlag` | `public TauntUsageManager.TauntUsage.TauntUsageFlag UsageFlag { get; }` |


## 主要方法

### Initialize

```csharp
public static TauntUsageManager Initialize()
```

### Read

```csharp
public void Read()
```

### GetUsageSet

```csharp
public TauntUsageManager.TauntUsageSet GetUsageSet(string id)
```

### GetAction

```csharp
public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)
```

### GetActionDisabledReasonText

```csharp
public static string GetActionDisabledReasonText(TauntUsageManager.TauntUsage.TauntUsageFlag disabledReasonFlag)
```

### GetIsActionNotSuitableReason

```csharp
public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)
```

### GetTauntItemCount

```csharp
public int GetTauntItemCount()
```

### GetIndexOfAction

```csharp
public int GetIndexOfAction(string id)
```

### GetDefaultAction

```csharp
public string GetDefaultAction(int index)
```

### Compare

```csharp
public int Compare(TauntUsageManager.TauntUsage.TauntUsageFlag x, TauntUsageManager.TauntUsage.TauntUsageFlag y)
```

### AddUsage

```csharp
public void AddUsage(TauntUsageManager.TauntUsage usage)
```

### GetUsages

```csharp
public MBReadOnlyList<TauntUsageManager.TauntUsage> GetUsages()
```

### IsSuitable

```csharp
public bool IsSuitable(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)
```

### GetIsNotSuitableReason

```csharp
public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsNotSuitableReason(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)
```

### GetAction

```csharp
public string GetAction()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntUsageManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntUsageManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsageManager`
**Base:** 无
**File:** `TaleWorlds.Core/TauntUsageManager.cs`

## 概述

`TauntUsageManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static TauntUsageManager Instance { get { if (TauntUsageManager._instance == null) { TauntUsageManager._instance = TauntUsageManager.Initialize(); }` |
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

## 使用示例

```csharp
// TauntUsageManager (Manager) 的典型用法
TauntUsageManager.Current;
```

## 参见

- [完整类目录](../catalog)
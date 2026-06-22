<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CosmeticsManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CosmeticsManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Cosmetics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/Cosmetics/CosmeticsManager.cs`

## 概述

`CosmeticsManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `CosmeticElementsList` | `public static MBReadOnlyList<CosmeticElement> CosmeticElementsList { get; }` |

## 主要方法

### GetCosmeticElement
```csharp
public static CosmeticElement GetCosmeticElement(string cosmeticId)
```

### LoadFromXml
```csharp
public static void LoadFromXml(string path)
```

## 使用示例

```csharp
// CosmeticsManager (Manager) 的典型用法
CosmeticsManager.Current;
```

## 参见

- [完整类目录](../catalog)
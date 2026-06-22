<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBUnusedResourceManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBUnusedResourceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBUnusedResourceManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBUnusedResourceManager.cs`

## 概述

`MBUnusedResourceManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### SetMeshUsed
```csharp
public static void SetMeshUsed(string meshName)
```

### SetMaterialUsed
```csharp
public static void SetMaterialUsed(string meshName)
```

### SetBodyUsed
```csharp
public static void SetBodyUsed(string bodyName)
```

## 使用示例

```csharp
// MBUnusedResourceManager (Manager) 的典型用法
MBUnusedResourceManager.Current;
```

## 参见

- [完整类目录](../catalog)
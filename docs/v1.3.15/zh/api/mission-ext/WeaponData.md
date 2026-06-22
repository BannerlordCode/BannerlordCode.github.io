<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct WeaponData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/WeaponData.cs`

## 概述

`WeaponData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### IsValid
```csharp
public bool IsValid()
```

### GetItemObject
```csharp
public ItemObject GetItemObject()
```

### DeinitializeManagedPointers
```csharp
public void DeinitializeManagedPointers()
```

## 使用示例

```csharp
// WeaponData (Data) 的典型用法
new WeaponData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
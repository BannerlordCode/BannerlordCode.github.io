<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CapsuleData`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CapsuleData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct CapsuleData`
**Base:** 无
**File:** `TaleWorlds.Engine/CapsuleData.cs`

## 概述

`CapsuleData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `P1` | `public Vec3 P1 { get { return this._globalData.P1; }` |
| `P2` | `public Vec3 P2 { get { return this._globalData.P2; }` |
| `Radius` | `public float Radius { get { return this._globalData.Radius; }` |

## 主要方法

### GetBoxMinMax
```csharp
public ValueTuple<Vec3, Vec3> GetBoxMinMax()
```

## 使用示例

```csharp
// CapsuleData (Data) 的典型用法
new CapsuleData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
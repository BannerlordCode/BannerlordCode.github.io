<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerData`
**Base:** 无
**File:** `TaleWorlds.Core/BannerData.cs`

## 概述

`BannerData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `LocalVersion` | `public int LocalVersion { get { return this._localVersion; }` |
| `MeshId` | `public int MeshId { get { return this._meshId; }` |
| `ColorId` | `public int ColorId { get { return this._colorId; }` |
| `ColorId2` | `public int ColorId2 { get { return this._colorId2; }` |
| `Size` | `public Vec2 Size { get { return this._size; }` |
| `Position` | `public Vec2 Position { get { return this._position; }` |
| `DrawStroke` | `public bool DrawStroke { get { return this._drawStroke; }` |
| `Mirror` | `public bool Mirror { get { return this._mirror; }` |
| `RotationValue` | `public float RotationValue { get { return this._rotationValue; }` |
| `Rotation` | `public float Rotation { get { return 6.2831855f * this.RotationValue; }` |

## 主要方法

### Equals
```csharp
public override bool Equals(object obj)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

## 使用示例

```csharp
// BannerData (Data) 的典型用法
new BannerData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BannerData.cs`

## 概述

`BannerData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BannerData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MeshId` | `public int MeshId { get; set; }` |
| `ColorId` | `public int ColorId { get; set; }` |
| `ColorId2` | `public int ColorId2 { get; set; }` |
| `Size` | `public Vec2 Size { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `DrawStroke` | `public bool DrawStroke { get; set; }` |
| `Mirror` | `public bool Mirror { get; set; }` |
| `RotationValue` | `public float RotationValue { get; set; }` |

## 主要方法

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
var value = new BannerData();
```

## 参见

- [完整类目录](../catalog)
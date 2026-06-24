<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ImageFit`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ImageFit

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ImageFit`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/ImageFit.cs`

## 概述

`ImageFit` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public ImageFitTypes Type { get; set; }` |
| `HorizontalAlignment` | `public ImageHorizontalAlignments HorizontalAlignment { get; set; }` |
| `VerticalAlignment` | `public ImageVerticalAlignments VerticalAlignment { get; set; }` |
| `OffsetX` | `public float OffsetX { get; set; }` |
| `OffsetY` | `public float OffsetY { get; set; }` |

## 主要方法

### GetFittedRectangle
`public ImageFitResult GetFittedRectangle(in Vector2 containerSize, in Vector2 imageSize)`

**用途 / Purpose:** 获取 `fitted rectangle` 的当前值。

## 使用示例

```csharp
var value = new ImageFit();
value.GetFittedRectangle(containerSize, imageSize);
```

## 参见

- [完整类目录](../catalog)
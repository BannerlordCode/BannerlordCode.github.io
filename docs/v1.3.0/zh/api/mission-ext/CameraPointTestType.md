<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CameraPointTestType`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CameraPointTestType

**命名空间:** TaleWorlds.MountAndBlade.View.Screens
**模块:** TaleWorlds.MountAndBlade
**类型:** `public enum CameraPointTestType`
**领域:** mission-ext

## 概述

`CameraPointTestType` 位于 `TaleWorlds.MountAndBlade.View.Screens`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Screens` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `Final` |
| `Albedo` |
| `Normal` |
| `Specular` |
| `AO` |
| `OnlyAmbient` |

## 使用示例

```csharp
CameraPointTestType example = CameraPointTestType.Final;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

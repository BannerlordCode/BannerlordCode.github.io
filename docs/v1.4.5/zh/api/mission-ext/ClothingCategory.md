<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClothingCategory`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClothingCategory

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**模块:** TaleWorlds.MountAndBlade
**类型:** `public enum ClothingCategory`
**领域:** mission-ext

## 概述

`ClothingCategory` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `Invalid` |
| `1` |
| `ClothingCategoriesBegin` |
| `0` |
| `All` |
| `0` |
| `HeadArmor` |
| `1` |
| `Cape` |
| `2` |
| `BodyArmor` |
| `3` |
| `HandArmor` |
| `4` |
| `LegArmor` |
| `5` |
| `ClothingCategoriesEnd` |

## 使用示例

```csharp
ClothingCategory example = ClothingCategory.Invalid;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

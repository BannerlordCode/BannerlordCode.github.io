---
title: "MapScreen"
description: "SandBox.View.Map.MapScreen —— 命名空间 SandBox.View.Map 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# MapScreen

**Namespace:** `SandBox.View.Map`  
**Module:** `SandBox.View`  
**Type:** `public class MapScreen : ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`  
**Base:** `ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`  
**Source:** `SandBox.View/Map/MapScreen.cs`

## 概述

`MapScreen` 是 bannerlord-1.4.7 源码中命名空间 `SandBox.View.Map` 下的类，声明于模块目录 `SandBox.View` 的 `SandBox.View/Map/MapScreen.cs`（第 44 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen`；解析到的成员共 539 项，其中 16 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public GameEntity GameEntity { get; set; }` — 属性，get/set，类型 GameEntity
- `public Decal Decal { get; set; }` — 属性，get/set，类型 Decal
- `public DecalEntity(GameEntity gameEntity, Decal decal)` — 方法，2 个参数，返回 D
- `public static MapScreen.DecalEntity Create(Scene scene, string material, string entityName = null)` — 方法，3 个参数，返回 MapScreen.DecalEntity
- `public bool IsLeftMouseDown;` — 字段，类型 bool
- `public bool IsLeftMousePressed;` — 字段，类型 bool
- `public bool IsLeftMouseReleased;` — 字段，类型 bool
- `public bool IsMiddleMouseDown;` — 字段，类型 bool
- `public bool IsMiddleMousePressed;` — 字段，类型 bool
- `public bool IsMiddleMouseReleased;` — 字段，类型 bool
- `public bool IsRightMouseDown;` — 字段，类型 bool
- `public bool IsRightMousePressed;` — 字段，类型 bool
- `public bool IsRightMouseReleased;` — 字段，类型 bool
- `public bool RotationChanged { get; private set; }` — 属性，get/set，类型 bool
- `public bool PositionChanged { get; private set; }` — 属性，get/set，类型 bool
- `public MainMapCameraMoveEvent(bool rotationChanged, bool positionChanged)` — 方法，2 个参数，返回 M


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 16 条成员记录全部来自 `SandBox.View/Map/MapScreen.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class MapScreen : ScreenBase, IMapStateHandler, IGameStateListener, IChatLogHandlerScreen` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`sandbox` API](../)
- [Add1000GoldCheat（同命名空间）](../Add1000GoldCheat)
- [Add100InfluenceCheat（同命名空间）](../Add100InfluenceCheat)
- [Add100RenownCheat（同命名空间）](../Add100RenownCheat)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)

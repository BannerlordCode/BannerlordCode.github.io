---
title: "基础 / Core API — v1.4.5"
description: "基础层：模块引导、游戏对象、MBObject 系统、文本、存档原语与 UI 基类。心智地图与阅读顺序。"
---
# 基础 / Core API

一切之上的基石。你接触这一层来**引导模组、持有全局状态、定义可存档数据**。

## ↑ 父级导航

- [API 索引](../)
- [架构索引](../../architecture/)
- [崩溃边界](../../architecture/crash-boundary)

## 本模块是什么

`api/core`（加上 `api/engine`）持有任何战役/任务之前就存在的类型：SubModule 引导管线、`Game` 单例、`MBObject`/对象管理器注册表、文本/本地化、存档原语。要加系统，从这里开始。

## 枢纽入口（从这里看）

| 类型 | 角色 | 深页 |
|------|------|------|
| `MBSubModuleBase` | 引导入口；重写生命周期钩子来注册类型/UI/Behavior | [MBSubModuleBase](./MBSubModuleBase) |
| `Game` | 全局游戏单例；`Game.Current` | [Game](./Game) |
| `MBObjectBase` | 每个已注册游戏对象的基类（ItemObject、CharacterObject…） | [MBObjectBase](./MBObjectBase) |
| `MBObjectManager` | 按 StringId 注册/查找 MBObject | （簇页） |
| `MBGameManager` | 创建并持有 `Game` 实例 | （簇页） |
| `TextObject` | 本地化、可变的字符串 | （簇页） |
| `CampaignTime` | 模拟使用的日历/时间类型 | （簇页） |
| `SaveableTypeDefiner` | 声明自定义可存档类型与 SaveId | （save-system） |
| `ViewModel` | UI 数据模型（Gauntlet） | （viewmodel） |
| `GauntletLayer` / `ScreenBase` | UI 面与屏幕栈 | （gui） |

## 依赖图

```
MBSubModuleBase → MBGameManager → Game
Game → Campaign（api/campaign）/ Mission（api/mission）
MBObjectBase ← MBObjectManager（注册表）
Game / Campaign → SaveManager（api/save-system）
ViewModel ← GauntletLayer（api/gui）
```

## 推荐阅读顺序

1. `MBSubModuleBase` — 你的代码如何被加载。
2. `Game` — 你到处都读的全局句柄。
3. `MBObjectBase` + `MBObjectManager` — 游戏对象如何注册/解析。
4. 然后跳到 `api/campaign`（Campaign、Hero、Actions、Models）或 `api/mission`。

## 风险概览（见崩溃边界）

- 在 `OnGameInitializationFinished` 之前绝不要碰 `Campaign.Current`（§6）。
- 通过管理器注册 MBObject，不要 `new`（§5）。
- 自定义存档数据需要 `SaveableTypeDefiner`（§1）。

## 参见

- [架构索引](../../architecture/)
- [Campaign 模块](../campaign/)
- [Mission 模块](../mission/)
- [崩溃边界](../../architecture/crash-boundary)

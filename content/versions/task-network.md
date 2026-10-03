---
title: "加一条网络消息"
description: "开发者视角总览：Bannerlord 里两个常被混淆的网络面——TaleWorlds.Network 的消息契约与后端通信、TaleWorlds.MountAndBlade.Multiplayer 的对局同步，以及它们各自该从哪查。"
extra:
  sidebar: auto
---

# 加一条网络消息

> **这条路径解决什么**：你要让 mod 能在网络上说话 —— 要么是「游戏 ↔ 后端服务」
> （排行榜、模组列表、云存档、遥测），要么是「对战里的两个客户端怎么同步」。
> **这两个是完全不同的系统，混起来查会白花几小时。**

## 心智模型：先分清你在跟谁说话

```text
① TaleWorlds.Network                    ← 游戏 ↔ 后端服务
   消息契约（NetworkMessage / MessageId / MessageInfo）
   连接与会话（ConnectionState / ClientsideSession）
   传输（RESTClient / ClientWebSocketHandler）
   用途：排行榜、模组列表、云存档、遥测

② TaleWorlds.MountAndBlade.Multiplayer*  ← 对战里的客户端 ↔ 客户端
   一局对战里两个客户端怎么同步
   落在 mission-ext 桶
```

**判据很简单**：你要同步的是「一局对战里的状态」，还是「游戏跟服务器的往返」？
前者查 ②，后者查 ①。

> 一个容易踩的坑：`Coroutine` / `CoroutineDelegate` 也落在 `network` 桶里，
> 因为它们用的是引擎的协程调度而不是 Unity 那套。看到这个不用奇怪。

## 本站的诚实状态

**这两个面目前都没有类型页。** 这不是「即将到来」，是现在没有：

- `network` 桶的目录索引页写明「本区当前没有页面」——它解释了这个桶装什么、
  边界在哪、与多人对战的区别，但没有类型级文档。见 [Network 桶入口（v1.4.7）](../../v1.4.7/zh/api/network/)。
- `mission-ext` 是全站最大的缺口桶（1.4.7 侧约 669 个类型，页面数 0），
  多人组件全在里面。见 [Mission-Ext 桶入口（v1.4.7）](../../v1.4.7/zh/api/mission-ext/)。

所以这一页的作用是**把你送到正确的桶，并告诉你该去哪读源码**，而不是替你列 API。

## 下钻路径

| 步骤 | 做什么 | 打开 |
| --- | --- | --- |
| 1 | 分清是后端通信还是对局同步 | [Network 桶入口（v1.4.7）](../../v1.4.7/zh/api/network/) |
| 2 | 战斗侧的落点（多人组件所在） | [Mission-Ext 桶入口（v1.4.7）](../../v1.4.7/zh/api/mission-ext/) |
| 3 | 战斗世界的基本概念 | [Mission](../../v1.3.15/zh/api/mission/Mission) · [处理一场战斗](../task-mission-action) |
| 4 | 战斗内挂行为 | [MissionBehavior](../../v1.3.15/zh/api/mission/MissionBehavior) |
| 5 | 模块清单里怎么声明依赖与加载顺序 | [模块系统](../../v1.3.15/zh/architecture/module-system) |
| 6 | 按 1.5.3 的程序集划分确认归属 | [模块地图（v1.5.3）](../../v1.5.3/zh/architecture/module-map) |

## 关键类型

**目前这两组类型在本站没有页面。** 按源码树查：
`TaleWorlds.Network/`（1.4.7 约 38 个类型）与
`TaleWorlds.MountAndBlade.Multiplayer*`（1.5.3 侧 7 个程序集、约 580 个 `.cs`）
都在 `bannerlord-1.4.7/` 与 `bannerlord-1.5.3/` 的源码树里，归属对照见
[模块地图（v1.5.3）](../../v1.5.3/zh/architecture/module-map)。

> 不要把 [Mission](../../v1.3.15/zh/api/mission/Mission) 当成网络入口。
> 它是战斗世界的门面，网络同步只是它周围发生的事。

## 你要注意什么

- **先确认你的目标系统。** `TaleWorlds.Network` 不是多人对战，多人组件也不在这个命名空间里。
  这个区分是本条路径的第一步，做错了后面全白搭。
- **网络相关的类型在当前文档树里查不到。** 这是覆盖缺口，不是你找错了地方。
  需要精确签名时读源码树，不要凭印象写。
- **1.5.3 里多人命名空间没有重整。** 实测 1.4.5 → 1.5.3，`TaleWorlds.MountAndBlade.Multiplayer*`
  的 12 个命名空间逐字相同 —— 从 1.4.5 迁到 1.5.3 时这块基本不用改。见
  [从 1.4.5 迁移到 1.5.3](../../v1.5.3/zh/architecture/migration-from-1.4.5)。
- **联机功能有服务端依赖。** 纯客户端 mod 能做的和需要后端配合的差别很大，
  立项前先确认你要的是哪一种。
- **`TaleWorlds.Diamond` 在 1.5.3 里仍然存在。** 消失的只是 `TaleWorlds.Diamond.Socket`
  子命名空间和 `ThreadedClient*` 那组线程化 REST 客户端 —— 别把这两件事混成
  「Diamond 被剔除了」。

## 导航

- ↑ [跨版本中枢 / 任务入口](../)
- ↑ [站点首页](../../)
- ↔ [Network 桶入口（v1.4.7）](../../v1.4.7/zh/api/network/) · [Mission-Ext 桶入口（v1.4.7）](../../v1.4.7/zh/api/mission-ext/)

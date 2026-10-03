---
title: "Bannerlord v1.5.3 文档"
description: "Bannerlord v1.5.3 版本入口：源码最完整的一版（11 487 个 .cs、68 个 TaleWorlds 程序集），中英两棵树、分层架构与 1.4.5→1.5.3 迁移指南。"
---

# Bannerlord v1.5.3 / 骑砍2 v1.5.3

> **这是全站源码最完整的一版。** `bannerlord-1.5.3/` 根目录下有 68 个 `TaleWorlds.*` 目录
> 加上 `SandBox` / `StoryMode`，共 **11 487** 个 `.cs`。
> 别的版本要么缺程序集、要么是反编译的部分转储，只有这一版能给出完整的分桶清单与覆盖统计 ——
> 因为没有需要猜的东西。

## 选择语言 / Pick a language

| | 架构 prose | 类型页 |
| --- | --- | --- |
| [中文 / Chinese](./zh/) | 完整 | 141 篇 |
| [English](./en/) | 完整（3 篇） | 0 篇（英文树无类型页） |

## 从哪里开始读 / Where to start

1. [SDK 分层概览](./zh/architecture/sdk-overview) —— 五层依赖心智模型，先建立大局观。
2. [模块地图](./zh/architecture/module-map) —— 68 个程序集逐个的归属、职责、「mod 该不该关心」。
3. [API 参考](./zh/api/) —— 按任务找入口，而不是从 A–Z 类表里猜。
4. 要升级？先读 [从 1.4.5 迁移到 1.5.3](./zh/architecture/migration-from-1.4.5)。

## 本版本怎么用

**定位：增量最大的终点版本，也是迁移风险的集中地。**
相对 1.4.5，实测有 **58 个 public/internal 类型彻底消失**，且 `Mission`、
`MapEventComponent`、`LobbyClient` 上有一批核心方法签名变化。
每一条结论都带两侧 `.cs` 证据路径，见 [从 1.4.5 迁移到 1.5.3](./zh/architecture/migration-from-1.4.5)。

**modder 的第一步**：读 [MBSubModuleBase](./zh/api/core/MBSubModuleBase)。
它是模块入口，`OnGameStart(Game, IGameStarter)` 的签名与旧文档不同 —— 这一处不核对会直接编译不过。

**这一版特有的坑**：

- **`MBSubModuleBase.OnGameStart` 的签名是 `(Game, IGameStarter)`**，不是旧文档里的 `(Game, IModularState)`。
  从 1.4.5 迁上来的 mod 第一个要改的就是这里。
- **这一版是 ILSpy 反编译产物。** 11 487 个文件里有 11 398 个带 `// Token: 0x…` 标记。
  签名可信，排版是反编译器的。做跨版本 diff 时要意识到这一点：
  先读 [迁移页](./zh/architecture/migration-from-1.4.5) 再决定哪些差异能信。
- **`TaleWorlds.Diamond` 没有被剔除。** 它在 1.5.3 里依然存在（命名空间归 `engine` 桶）。
  消失的只是 `TaleWorlds.Diamond.Socket` 子命名空间和 `ThreadedClient*` 那组线程化 REST 客户端。
- **`TaleWorlds.ObjectManager` 从来没有存在过。** 四棵源码树里匹配数都是 0；
  对象身份走的是 `TaleWorlds.ObjectSystem` 里的 `MBObjectManager`。
  这是一次更早期的重命名，不是 1.4.5 → 1.5.3 的变化。
- **多人命名空间没有重整。** `TaleWorlds.MountAndBlade.Multiplayer*` 的 12 个命名空间在 1.4.5 与 1.5.3 里逐字相同。
- **英文树没有类型页。** `en/` 下只有 3 篇架构页与 `api/_index.md`，没有任何桶目录。需要英文时先切到中文树。

## 桶索引页现在不存在（重要）

**这一版的 `api/<桶>/` 目录索引页一张都没有。** 10 个有内容的桶
（`campaign` 12 · `campaign-ext` 2 · `core-extra` 3 · `core` 1 · `engine` 1 ·
`gui` 2 · `localization` 19 · `mission` 2 · `save-system` 4 · `storymode` 92）
都没有 `_index.md`，所以**站内没有任何链接可以指向桶目录**。

因此本页**不给桶目录链接** —— 给了就是 404。
在这个版本里找类型的正确走法是：

1. 进 [API 参考](./zh/api/) —— 那里按任务列出了每一篇真实存在的类型页。
2. 或者查 [模块地图](./zh/architecture/module-map) 末尾的「各桶覆盖实况」表，确认某个类型归哪个桶。
3. 桶索引页补齐之后，上面两条会合并成「点桶名进目录」。

> 覆盖实况：1.5.3 源码扫描到 **6 824 个类型**，本树逐页手写了其中 **27 个**门面类（0.4%），
> 其余 6 797 个尚未撰写。缺口最大的三个桶是 `mission-ext`（2 065）、`sandbox`（1 247）、
> `campaign-ext` 未撰写部分（769）。完整表见 [模块地图](./zh/architecture/module-map)。

## 现在该读哪一版 / Which version to read

| 你想做什么 | 建议 |
| --- | --- |
| 针对当前游戏版本开发 | **v1.5.3**（源码最完整）· 看 [迁移页](./zh/architecture/migration-from-1.4.5) |
| 要一个能用的 v1.4.x 文档 | [v1.4.5](../v1.4.5/) —— 覆盖最完整的一版 |
| 要长期稳定基线 | [v1.3.15](../v1.3.15/) |
| 要逐类 API 差异 | [跨版本类对比](../versions/) —— 注意它只覆盖到 1.4.5 |
| 只关心 1.3.0 | [v1.3.0](../v1.3.0/) |

## 相邻版本

- ← [v1.4.7](../v1.4.7/) · [v1.4.6](../v1.4.6/) · [v1.4.5](../v1.4.5/)
- ← [v1.3.15](../v1.3.15/) · [v1.3.0](../v1.3.0/)

## 导航

- ↑ [站点首页](../) —— 全部版本与「按我要做什么进入」
- ↔ [中文文档](./zh/) · [English documentation](./en/)
- ↘ [SDK 分层概览](./zh/architecture/sdk-overview) · [模块地图](./zh/architecture/module-map) · [从 1.4.5 迁移](./zh/architecture/migration-from-1.4.5)
- ↘ [API 参考](./zh/api/) · [跨版本类对比](../versions/)

---
title: "API 参考 — 按任务找入口"
description: "v1.4.7 的 API 按子系统分成 19 个目录：一个类型只属于一个目录，同目录重名用 Namespace__Type 区分。"
---
# API 参考 — 按任务找入口

这不是签名墙。先决定你要做的事，从下面的表进对应目录，再进具体类型页。**同一类型只存在于一个目录** —— 1.4.5 的文档树里同一个类型名出现在两个目录共 2,199 次，那正是"点进去发现是别的地方、然后回不来"的根源。v1.4.7 修掉了这一点。## 目录

| 目录 Directory | 页面 Pages |
| --- | ---: |
| [core](core/) | 2 |  — 入口类（模块加载）
| [core-extra](core-extra/) | 56 |
| [mission](mission/) | 4 |  — 入口类（模组继承这些）
| [mission-ext](mission-ext/) | 518 |
| [campaign](campaign/) | 194 |
| [campaign-ext](campaign-ext/) | 73 |
| [gui](gui/) | 75 |
| [save-system](save-system/) | 28 |
| [viewmodel](viewmodel/) | 357 |
| [localization](localization/) | 24 |
| [engine](engine/) | 42 |
| [system](system/) | 6 |
| [custombattle](custombattle/) | 21 |
| [modulemanager](modulemanager/) | 6 |
| [network](network/) | 6 |
| [sandbox](sandbox/) | 321 |
| [storymode](storymode/) | 74 |
| [activitysystem](activitysystem/) | 6 |
| [achievementsystem](achievementsystem/) | 4 |

> **没有 `gameplay/` 目录，也没有 `navigationsystem/` 目录。** 前者被拆成 `sandbox` 与 `storymode`（1.4.5 那个目录本身是混合的），后者在 1.4.7 里没有公开类型，归入 `core-extra`。原因见 [版本差异](../architecture/version-delta)。

> `mission/` 与 `core/` 刻意做小，只放模组入口类；完整的 `TaleWorlds.MountAndBlade` 与基础层在 `mission-ext/` 与 `core-extra/`。

## 依赖阅读顺序

1. [架构总览](../architecture/) —— 先确认自己处于哪一层。
2. 本页的目录表 —— 进入对应子系统。
3. 目录索引页 —— 它列出了该区的全部叶子页，并给出相邻目录的返回链接。
4. 具体类型页 —— 看心智模型、何时用、何时不要用、风险。

## 参见

- ↑ [版本首页](../)
- ↔ [架构总览](../architecture/)
- ↘ [跨版本类对比](../../../versions/)

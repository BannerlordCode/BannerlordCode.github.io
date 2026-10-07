# nav-T 核源报告：campaign-event-system.md 补源码引用

- 日期：2026-08-14
- 执行：worker-155（任务 T）
- 对象：`content/v1.3.15/{zh,en}/architecture/campaign-event-system.md`（改前实测 0 条 `.cs` 引用）
- 源码根：仓库根同级 `bannerlord-1.3.15/TaleWorlds.CampaignSystem/`
- 判据：每条引用满足 `N <= wc -l <file>`；形态为反引号代码片段（非 markdown 链接）；指向声明处

## 引用清单（zh / en 两页各 5 条，共 10 条）

| # | 引用 | 核源命令 | wc -l | 越界？ | 该行实际内容 |
|---|------|----------|-------|--------|--------------|
| 1 | `CampaignEventReceiver.cs:32` | `wc -l CampaignEventReceiver.cs` | 1409 | 否（32 ≤ 1409） | `public abstract class CampaignEventReceiver` |
| 2 | `CampaignEventDispatcher.cs:33` | `wc -l CampaignEventDispatcher.cs` | 2847 | 否（33 ≤ 2847） | `public class CampaignEventDispatcher : CampaignEventReceiver` |
| 3 | `CampaignEvents.cs:32` | `wc -l CampaignEvents.cs` | 5555 | 否（32 ≤ 5555） | `public class CampaignEvents : CampaignEventReceiver` |
| 4 | `Campaign.cs:611` | `wc -l Campaign.cs` | 2997 | 否（611 ≤ 2997） | `internal CampaignEvents CampaignEvents { get; private set; }` |
| 5 | `Campaign.cs:1197` | `wc -l Campaign.cs` | 2997 | 否（1197 ≤ 2997） | `private void CreateCampaignEvents()` |

三条协作关系覆盖：#1 = CampaignEventReceiver（契约）、#2 = CampaignEventDispatcher（分发器）、#3 = CampaignEvents（中央 hub），均指向**类声明处**。#4/#5 分别支撑「谁持有」与生命周期 `CreateCampaignEvents()` 断言。

## 核源命令原文

```
$ cd bannerlord-1.3.15/TaleWorlds.CampaignSystem
$ wc -l CampaignEvents.cs CampaignEventDispatcher.cs CampaignEventReceiver.cs Campaign.cs
  5555 CampaignEvents.cs
  2847 CampaignEventDispatcher.cs
  1409 CampaignEventReceiver.cs
  2997 Campaign.cs
$ grep -n 'class CampaignEvents' CampaignEvents.cs
32:	public class CampaignEvents : CampaignEventReceiver
$ grep -n 'class CampaignEventDispatcher' CampaignEventDispatcher.cs
33:	public class CampaignEventDispatcher : CampaignEventReceiver
$ grep -n 'class CampaignEventReceiver' CampaignEventReceiver.cs
32:	public abstract class CampaignEventReceiver
$ grep -n 'CampaignEvents {' Campaign.cs
611:		internal CampaignEvents CampaignEvents { get; private set; }
$ grep -n 'CreateCampaignEvents()' Campaign.cs
1197:		private void CreateCampaignEvents()
```

## 引用计数

```
$ grep -c '`[A-Za-z0-9_]*\.cs:[0-9]' content/v1.3.15/{zh,en}/architecture/campaign-event-system.md
content/v1.3.15/zh/architecture/campaign-event-system.md:5
content/v1.3.15/en/architecture/campaign-event-system.md:5
```

## audit-links 读数

```
$ node tools/audit-links.mjs
TOTAL_LINKS=149156
BROKEN_LINKS=2
FILES_WITH_BROKEN=2
```

BROKEN_LINKS=2 均为**既有问题**，位于 `v1.3.15/{zh,en}/architecture/ui-three-layers.md`（`../../api/screen-system/ScreenManager` 不可解析），与本次改动无关。证据：`git stash` 后（工作区回到 HEAD 干净态）复跑仍 `BROKEN_LINKS=2`；`git stash pop` 后本次改动恢复。本次改动**新增坏链 0 条**。

## 改动范围

仅改 2 个文件（各 3 处：三类协作表格加「声明处/Declaration」列 3 条 + 关键事实 1 条 + 生命周期 1 条）：

- `content/v1.3.15/zh/architecture/campaign-event-system.md`
- `content/v1.3.15/en/architecture/campaign-event-system.md`

未改 `campaign-events.md`；未改判据/阈值；未碰 `templates/**`。

## diff 原文

```diff
diff --git a/content/v1.3.15/en/architecture/campaign-event-system.md b/content/v1.3.15/en/architecture/campaign-event-system.md
@@ -33,15 +33,15 @@
-| Class | Role | Held by | How mods use it |
-|-------|------|---------|-----------------|
-| `CampaignEventReceiver` | **Contract**: defines all `OnXxx` virtual methods + `RemoveListeners` | — | Inherit it to write a custom receiver (rare) |
-| `CampaignEventDispatcher` | **Dispatcher**: fans out each `OnXxx` call to all registered receivers | `Campaign.Current.CampaignEventDispatcher` | Not used directly; the game kernel calls through it |
-| `CampaignEvents` | **Central hub**: holds ~274 `IMbEvent<T>` static properties + forwarding logic | `Campaign.Current.CampaignEvents` | **Subscribe to its static event properties** |
+| Class | Role | Held by | How mods use it | Declaration |
+|-------|------|---------|------------------|-------------|
+| `CampaignEventReceiver` | **Contract**: defines all `OnXxx` virtual methods + `RemoveListeners` | — | Inherit it to write a custom receiver (rare) | `CampaignEventReceiver.cs:32` |
+| `CampaignEventDispatcher` | **Dispatcher**: fans out each `OnXxx` call to all registered receivers | `Campaign.Current.CampaignEventDispatcher` | Not used directly; the game kernel calls through it | `CampaignEventDispatcher.cs:33` |
+| `CampaignEvents` | **Central hub**: holds ~274 `IMbEvent<T>` static properties + forwarding logic | `Campaign.Current.CampaignEvents` | **Subscribe to its static event properties** | `CampaignEvents.cs:32` |
@@ -50,7 +50,7 @@
-1. **You never `new CampaignEvents()`.** It has no public constructor. Mods access static properties like `CampaignEvents.HeroKilledEvent` directly.
+1. **You never `new CampaignEvents()`.** It has no public constructor. Mods access static properties like `CampaignEvents.HeroKilledEvent` directly. The instance is held by `Campaign` (`Campaign.cs:611`).
@@ -50,7 +50,7 @@
-  └─ CreateCampaignEvents()
+  └─ CreateCampaignEvents() (`Campaign.cs:1197`)

diff --git a/content/v1.3.15/zh/architecture/campaign-event-system.md b/content/v1.3.15/zh/architecture/campaign-event-system.md
@@ -33,15 +33,15 @@
-| 类 | 角色 | 谁持有 | mod 怎么用 |
-|----|------|--------|------------|
-| `CampaignEventReceiver` | **契约**：定义全部 `OnXxx` 虚方法 + `RemoveListeners` | — | 继承它来写自定义 receiver（少见） |
-| `CampaignEventDispatcher` | **分发器**：把每次 `OnXxx` 扇出给所有已注册 receiver | `Campaign.Current.CampaignEventDispatcher` | 不直接用；游戏内核通过它调用 |
-| `CampaignEvents` | **中央 hub**：持有 ~274 个 `IMbEvent<T>` 静态属性 + 转发逻辑 | `Campaign.Current.CampaignEvents` | **订阅它的静态事件属性** |
+| 类 | 角色 | 谁持有 | mod 怎么用 | 声明处 |
+|----|------|--------|------------|--------|
+| `CampaignEventReceiver` | **契约**：定义全部 `OnXxx` 虚方法 + `RemoveListeners` | — | 继承它来写自定义 receiver（少见） | `CampaignEventReceiver.cs:32` |
+| `CampaignEventDispatcher` | **分发器**：把每次 `OnXxx` 扇出给所有已注册 receiver | `Campaign.Current.CampaignEventDispatcher` | 不直接用；游戏内核通过它调用 | `CampaignEventDispatcher.cs:33` |
+| `CampaignEvents` | **中央 hub**：持有 ~274 个 `IMbEvent<T>` 静态属性 + 转发逻辑 | `Campaign.Current.CampaignEvents` | **订阅它的静态事件属性** | `CampaignEvents.cs:32` |
@@ -50,7 +50,7 @@
-1. **你永远不会 `new CampaignEvents()`**。它没有公共构造函数。mod 直接访问 `CampaignEvents.HeroKilledEvent` 这样的**静态属性**即可。
+1. **你永远不会 `new CampaignEvents()`**。它没有公共构造函数。mod 直接访问 `CampaignEvents.HeroKilledEvent` 这样的**静态属性**即可。实例由 `Campaign` 持有（`Campaign.cs:611`）。
@@ -50,7 +50,7 @@
-  └─ CreateCampaignEvents()
+  └─ CreateCampaignEvents()（`Campaign.cs:1197`）
```

## 结论

✅ 三条协作关系各 1 条声明处引用（#1/#2/#3），另补 2 条支撑性引用（#4/#5）；全部 IN-BOUNDS；形态为反引号代码片段；audit-links 新增坏链 0 条（既有 2 条在 ui-three-layers.md，与本任务无关，已用 git stash 对照证明）。

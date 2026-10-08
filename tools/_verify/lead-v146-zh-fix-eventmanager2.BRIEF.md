# brief · fix-eventmanager2（同名异类内容缺陷 · 具体到行）

## 缺陷（一句话）
`content/v1.4.6/zh/api/core-extra/EventManager.md` 的 **`## 怎么用` 一节（第 59 行起，共 49 行）在教【另一个同名类】** ——
`TaleWorlds.GauntletUI.EventManager`（UI 事件，1506 行），而**页面主语是** `TaleWorlds.Library/EventSystem/EventManager.cs`（58 行，按类型分发的事件总线）。
**读者照它写会用错 API。**

## 你要做的唯一一件事
**把 `## 怎么用` 这一节（第 59 行到下一个 `## ` 之前）整节改写为 Library 版的用法。** 其余内容**一个字都不要动**。

## 主语类的完整 API（**锚表实测，就这 7 条 —— 引用行号只能取自这里**）
```
7: 	public class EventManager
10: 		public EventManager()
16: 		public void RegisterEvent<T>(Action<T> eventObjType)
27: 		public void UnregisterEvent<T>(Action<T> eventObjType)
38: 		public void TriggerEvent<T>(T eventObj)
44: 		public void Clear()
50: 		public IDictionary<Type, object> GetCloneOfEventDictionary()
```
（生成命令，可复跑：`node tools/_verify/make-anchor-table.mjs C:/WorkSpace/Bannerlord/bannerlord-1.4.6 TaleWorlds.Library/EventSystem/EventManager.cs`）

**引用纪律**：行号写成 `` `EventManager.cs:N` ``，N 只能是上表里的 `7/10/16/27/38/44/50`。**表外行号一律不写。**

## 该节要写成什么（结构）
保留原有的三个 H3 标题（`### 怎么拿到它` / `### 典型用法` / `### 坑`），把内容换成 Library 版：
- **怎么拿到它**：`Game.Current.EventManager`（`Game.cs` 的对应属性；若要引用 `Game.cs` 行号，先为该文件生成锚表，且 `Game.cs` basename 全树唯一 = 1 ✅ 已知）。
- **典型用法**：注册 / 触发 / 注销的完整往返（`RegisterEvent<T>` → `TriggerEvent<T>` → `UnregisterEvent<T>`），要含 **`.方法名(` 的真实调用**。
- **坑**：按类型精确分发、**不做继承链回溯**（所以注册基类型不会收到子类型事件）；`Clear()` 的语义；`GetCloneOfEventDictionary()` 返回的是**克隆**（改它不影响内部表）。

## 禁止
- **不要改** `概述` / `心智模型` / `关键成员` / `真实示例` / `参见` / `导航` / `依赖关系`。
- **不要**再展开 GauntletUI 版的 API。若有必要，最多用**一行**在「坑」里说明「另有一个同名类 `TaleWorlds.GauntletUI.EventManager` 是 UI 输入状态，与本页无关」。
- 不动 `_index.md`；不 `git add`/`commit`；不改 `tools/**`。

## 验收（两条都要过）
```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs content/v1.4.6/zh/api/core-extra/EventManager.md
# 期望 PASS
node tools/_verify/detect-same-name-class.mjs . C:/WorkSpace/Bannerlord/bannerlord-1.4.6 content/v1.4.6/zh/api/core-extra/EventManager.md
# 期望「嫌疑页：0」
```

## 硬约束（磁盘可判定）
> **本轮结束时若上面两条命令任一条不是期望结果，则本轮视为未完成 —— 直接回报「未完成 + 卡点」。**

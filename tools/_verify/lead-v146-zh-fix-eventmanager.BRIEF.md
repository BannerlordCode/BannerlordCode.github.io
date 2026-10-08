# brief · fix-eventmanager（同名异类内容缺陷修复，单页独立任务）

页面：`content/v1.4.6/zh/api/core-extra/EventManager.md`
主语源文件：`TaleWorlds.Library/EventSystem/EventManager.cs`（58 行）
同名异类：`TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs`（1505 行）

## 缺陷（不是引用问题，是内容缺陷）
该页 `## 怎么用` **整节在教【另一个同名类】**（GauntletUI 版），而页面主语是 **Library 版**。
读者照它写会用到**错误的 API**。
检测器读数（`tools/_verify/detect-same-name-class.mjs`）：13 个成员名只存在于 GauntletUI 版 ——
`UsableArea` `LeftUsableAreaStart` `TopUsableAreaStart` `PageSize` `MousePositionInReferenceResolution`
`IsControllerActive` `Root` `FocusedWidget` `HoveredWidget` `MouseOveredWidgets` `DraggedWidget` `OnDragStarted` `OnDragEnded`

## 修法
1. **把 `## 怎么用` 整节改写为 Library 版 `EventManager` 的用法** —— 即「按类型分发的事件总线」：
   注册 / 触发 / 注销监听（具体方法名与签名**自己读主语源码确认**，不要照抄本 brief 里的名字）。
2. 该节原有素材可参考同页 `## 真实示例`（那里已是 Library 版用法）。
3. **若某些 GauntletUI 版事实仍有价值**，可在「坑」里用**一行**说明「另有一个同名类 `TaleWorlds.GauntletUI.EventManager`，是 UI 输入状态，与本页无关」——
   但**不要**再展开它的 API。
4. **不要动** 概述 / 心智模型 / 关键成员（若其内容本就正确）；只改**讲错类的那部分**。

## 硬规则
- **行号只能取自锚表**：`tools/_verify/_tmp/anchors/` 下为 `TaleWorlds.Library/EventSystem/EventManager.cs` 生成一份：
  ```bash
  cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
  node tools/_verify/make-anchor-table.mjs C:/WorkSpace/Bannerlord/bannerlord-1.4.6 TaleWorlds.Library/EventSystem/EventManager.cs
  ```
  表外行号不写；锚表没有的成员 ⇒ 那一行不写。
- **不写未经测量的断言**；名字只能来自锚表或源码实测。
- 跨文件引用需 basename 全树唯一（`find … -name <File>.cs | wc -l` = 1），并在回报里列出新增的锚表。
- **集合等式自检**：回报「页面引用行号集合」与「锚表行号集合」+ 判定 ⊆。
- 不动任何 `_index.md`；不 `git add`/`commit`；不改 `tools/**`。

## 验收（两条都要过）
```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs content/v1.4.6/zh/api/core-extra/EventManager.md   # 期望 PASS
node tools/_verify/detect-same-name-class.mjs . C:/WorkSpace/Bannerlord/bannerlord-1.4.6 content/v1.4.6/zh/api/core-extra/EventManager.md
# 期望：嫌疑 0（该页不再出现「只存在于同名异类里」的成员名）
```

## 硬约束（磁盘可判定）
> **本轮结束时若上述两条命令任一条不是期望结果，则本轮视为未完成 —— 直接回报「未完成 + 卡点」。**

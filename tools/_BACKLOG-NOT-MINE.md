# 待审存量登记（B 组）— 产出方不是 lead-5 的页

**登记规则**（boss #6561 裁定，与 §4i 同款）：
```
登记  在此列出，标注【产出方】
分配  不派给 lead-5 的任何 worker
复核  不做
```
**第三行最重要：登记不是「顺手做一点」。**
一旦 lead-5 开始核它，就在承担一个不属于 lead-5 的责任，
而那些页的作者上下文也不在 lead-5 手里。

**归属 ≠ 授权。判对了归属，也不能因为「反正没人排」就由别人代排。**

---

## R-8-01 · mission-ext 14 页 —— 产出方 = lead-8 / worker-39

```
AgentBuildData.md        AgentCapsuleData.md      AgentComponent.md
AgentController.md       AgentHumanAILogic.md     AgentLastHitInfo.md
AgentSpawnData.md        AgentStatusCondition.md  AgentVictoryLogic.md
AgentVisuals.md          AgentVisualsCreator.md   AgentVisualsData.md
MissionAgentSpawnLogic.md MissionState.md
```
**归属依据**：这些页在 lead-5 这轮开工前就已脏（mtime 2026-10-04 21:18–23:31），
且 worker-43 独立核对确认「正文不是我写的」。

**⚠ 注意 MissionAgentSpawnLogic.md 这一页的特殊性**：
```
它已被 worker-36 按 boss 的「已移除类保留 + 移除说明」格式改写为样板页，
而它的【原正文】属于 lead-8。
```
**⇒ 样板是 lead-5 这轮的产出（原正文归属不变）。复查时两者不要混为一谈。**

**待审标记**：由 lead-8 自己排。lead-5 不分配、不代审。

---

## R-8-02 · viewmodel 23 页 —— 产出方 = 更早的生成器 / 其他产线

```
这 23 页在 lead-5 这轮只被改过 **File:** 一行指针（worker-43 授权内的 64 页的一部分），
否定式断言在 git HEAD 里已逐字存在：
  ActionOptionDataVM 5→5 · ArmyManagementItemVM 3→3 · CampaignOptionsManager 6→6（HEAD 与现在完全相同）
```
**⇒ 正文产出方不是本轮任何 worker。本轮只修了指针。**

**待审标记**：进 B 组存量。lead-5 不分配、不代审。

---

## 口径警告（本轮踩过的坑）

**`git 脏` ≠ `本会话作者`。**
```
一页可以只因改了一行指针而变脏，而它的正文是更早的产线写的。
git 只能给出「最后修改者」，给不出「作者」。
```
⇒ 凡按「谁写的」分派任务，判据必须是**该页正文是否在本会话被写过**，
即 git diff 里**除字段/指针以外的行**发生变化。
⇒ 一把尺若给不出这个维度，**必须写明它给不出**。
（`tools/_census-claim-evidence-ab.mjs` 已在输出首行标注该警告。）

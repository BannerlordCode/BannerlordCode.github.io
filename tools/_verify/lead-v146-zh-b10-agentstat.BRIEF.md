# brief · b10-agentstat（v1.4.6/zh 手写深页写作线）

- 批次：批 10
- 页面：`content/v1.4.6/zh/api/mission-ext/AgentStatCalculateModel.md`
- 源文件：`TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`（294 行）
- 锚表：`tools/_verify/_tmp/anchors/b10-agentstat.txt`（34 个锚点，派单前生成）
- dup 检查：`find <root> -name AgentStatCalculateModel.cs | wc -l` → **1**（规避 `ambiguous` 门禁洞）
- 派单时刻：2026-10-08T01:26Z
- 落盘理由（boss #22603）：让「brief 里不出现锚表外的名字」可机械检查。

---

## 题头三行（命令实测值，非断言）

```
**Namespace:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>`
**Source:** `TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs`
```

实测输出：
```
### TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs   (wc -l = 294, anchors = 34)
9: 	public abstract class AgentStatCalculateModel : MBGameModel<AgentStatCalculateModel>
```

## 内容提示（**零名字**写法 —— 只描述角色 / 边界 / 主线）

> 请自己读源码后确定要写哪些成员。这一页的主线是：**它是「单位属性怎么算出来」的可替换模型基类** —— 定义了一组计算入口（近战与远程伤害、移动速度、AI 相关数值、士气与状态折算等），游戏用它把「兵种模板 + 装备 + 技能 + 当前状态」折算成**运行时数值**。
>
> **必须写清两件事**：① **为什么 mod 应该继承它而不是直接改数值** —— 它是被引擎在更新周期里调用的模型，覆写它才能让改动**对所有单位一致生效**；② 它与「单单位属性容器」那一层的**分工**：后者是**结果**，本类是**算法**。（已入库的 `../AgentDrivenProperties` 就是「结果」那一层，可互链。）

**自查**：本节不出现任何类型名 / 方法名 / 成员名（`AgentDrivenProperties` 只在链接白名单里出现，属已存在页面路径）。

## 门禁口径（预置，避免 worker 去读校验脚本）

- `checked` = 页面里所有 `文件.cs:N` 形态引用（写全文件名），全文任何位置都算，表格行内也算；要求 `checked ≥ 关键成员表行数`
- `J6=deep_pass` 硬要求 = `## 参见` 里 ≥2 条 markdown 链接
- `J7` = 全文不得出现 `自动生成` / `Auto-generated stub` / `<!-- v*-skeleton -->` / `是 TaleWorlds.X 下的公开类型` / `阅读时先通过属性了解状态`
- `J8` 正文 > 2500 字节；`J9` csharp 块 ≥3 有效行含真实调用；`J10` 链接只在 `## 参见`/`## 导航`；`J11` 叶子目标不带尾斜杠

## 链接白名单（已逐条实测存在）

`../AgentDrivenProperties` `../OrderController` `../ArrangementOrder` `../UsableMachine` `../MissionLogic` `../MissionObject` `../Team` `../MBGameManager` `../ItemType` `../_index` `../../mission/Agent` `../../mission/Mission` `../../mission/Formation` `../../mission/MissionBehavior` `../../core-extra/Game` `../../core-extra/GameModelsManager` `../../core-extra/BasicCharacterObject` `../../campaign/CharacterObject` `../../campaign/Hero`

## 硬约束（磁盘可判定的后果）

> **本轮结束时若 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.4.6/zh/api/mission-ext/AgentStatCalculateModel.md` 不存在，则本轮视为未完成 —— 直接回报「未完成」并说明卡点。**

## 边界

- leaf-only：不动任何 `_index.md`；不 `git add`/`git commit`；不改 `tools/**`
- **第一个动作必须是创建文件**
- 若源码与 brief 冲突，**以源码为准**并在回报里指出

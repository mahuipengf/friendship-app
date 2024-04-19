LIST =  friendShip-server project

#测试命令 创建文件夹
cr-mkdir:
	mkdir overview

#测试命令 删除文件夹
cl-rmdir:
	rmdir overview

#安装依赖
install:
	@# cd friendship-project && yarn
	@# cd friendShip-server && yarn
	# for i in $(LIST); do \
	# 	cd $$i \
	# 	yarn; \
	# done
	cd friendship-project && yarn
	cd friendShip-server && yarn

#删除依赖
clear:
	cd friendship-project && rm -rf node_modules
	cd friendShip-server && rm -rf node_modules

#启动项目
dev: 
	cd friendship-project && yarn dev

#启动服务
server:
	cd friendship-server && node index.js
# start:
# 	cd friendShip-server && node index.js
# 	cd project && yarn dev

#启动后 执行exit 推出 tmux终端 通过按键ctrl + b 通过左右方向箭头可操控切换终端窗口
#删除已经创建的终端窗口 tmux attach -t my_session -c window
#分割窗口 split-window -h ｜｜ ctl + b %
# start-services:
# 	tmux new-session -s my_services 'cd friendShip-server && node index.js'
# 	tmux split-window -h 'cd project && yarn dev'
# 	tmux select-layout even-horizontal
# 	tmux attach-session -t my_services


start-services:
	./start_services.sh